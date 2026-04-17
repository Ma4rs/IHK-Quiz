from __future__ import annotations

from pathlib import Path
import re

from rapidocr_onnxruntime import RapidOCR


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "Prüfungen" / "Sommer25"
OUT = ROOT / "ocr-sommer25"
SECTIONS = ("K&A", "A&E", "Wiso")


def natural_key(path: Path):
    text = path.stem
    parts = re.split(r"(\d+)", text)
    return [int(p) if p.isdigit() else p.lower() for p in parts]


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    engine = RapidOCR()

    for section in SECTIONS:
        src_dir = SRC / section
        out_dir = OUT / section
        out_dir.mkdir(parents=True, exist_ok=True)
        images = sorted(src_dir.glob("*.jpg"), key=natural_key)
        for img in images:
            result, _ = engine(str(img))
            lines = []
            if result:
                for item in result:
                    # item: [box, text, score]
                    text = (item[1] or "").strip()
                    if text:
                        lines.append(text)
            out_file = out_dir / f"{img.stem}.txt"
            out_file.write_text("\n".join(lines), encoding="utf-8")
            print(f"OCR: {img.relative_to(ROOT)} -> {out_file.relative_to(ROOT)} ({len(lines)} lines)")


if __name__ == "__main__":
    main()
