#!/usr/bin/env python3
"""Render exact PNG identity assets for the Virtualmase root directory."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PAPER, INK, BLUE, RUST = '#f7f6f0', '#10233f', '#1746c8', '#d65e37'
SERIF = '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf'
MONO = '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'

def f(path, size): return ImageFont.truetype(path, size=size)
def icon(size, output):
    image = Image.new('RGB', (size, size), PAPER); draw = ImageDraw.Draw(image)
    p, sw = int(size*.22), max(3, int(size*.075)); x, y = size//2, int(size*.76)
    draw.line((p, p, x, y), fill=BLUE, width=sw); draw.line((x, y, size-p, p), fill=BLUE, width=sw); draw.line((x, y, x, int(size*.13)), fill=BLUE, width=sw)
    draw.ellipse((x-int(size*.08), y-int(size*.08), x+int(size*.08), y+int(size*.08)), fill=RUST)
    image.save(output, optimize=True)
def social(output):
    image = Image.new('RGB', (1200, 630), PAPER); draw = ImageDraw.Draw(image)
    draw.line((0, 122, 1200, 122), fill='#c7cbd0', width=2); draw.line((95, 0, 95, 630), fill='#c7cbd0', width=2)
    draw.text((95, 80), 'VIRTUALMASE  /  PUBLIC SYSTEMS DIRECTORY', font=f(MONO, 24), fill=INK)
    draw.text((95, 218), 'A public map', font=f(SERIF, 84), fill=INK); draw.text((95, 315), 'for systems work.', font=f(SERIF, 84), fill=BLUE)
    draw.rectangle((95, 434, 510, 439), fill=RUST)
    draw.ellipse((894, 252, 1050, 408), outline=BLUE, width=6); draw.line((815, 330, 1120, 330), fill=BLUE, width=6)
    draw.line((972, 330, 972, 175), fill=BLUE, width=6); draw.ellipse((954, 492, 990, 528), fill=RUST)
    draw.text((778, 512), 'LEARN   ·   DEFINE   ·   INSPECT   ·   CONTRIBUTE', font=f(MONO, 15), fill=INK)
    image.save(output, optimize=True)
for size in (48, 180, 192, 512): icon(size, ROOT / f'favicon-{size}.png')
social(ROOT / 'og-image.png')
