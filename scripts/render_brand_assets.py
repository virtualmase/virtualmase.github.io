#!/usr/bin/env python3
"""Render PNG favicon sizes from the canonical SVG without Python packages."""

from pathlib import Path
import shutil
import subprocess

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "favicon.svg"
SIZES = (48, 180, 192, 512)


def main() -> None:
    ffmpeg = shutil.which("ffmpeg")
    if not ffmpeg:
        raise SystemExit("ffmpeg is required to render PNG favicon assets")
    for size in SIZES:
        subprocess.run(
            [
                ffmpeg,
                "-y",
                "-loglevel",
                "error",
                "-i",
                str(SOURCE),
                "-vf",
                f"scale={size}:{size}",
                str(ROOT / f"favicon-{size}.png"),
            ],
            check=True,
        )
    print(f"Rendered {len(SIZES)} favicon sizes from {SOURCE.name}.")


if __name__ == "__main__":
    main()
