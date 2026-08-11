import os
from PIL import Image

def make_white_transparent(input_path, output_path=None, threshold=240):
    if output_path is None:
        output_path = input_path

    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        r, g, b, a = item
        # If the pixel is near-white (all channels above threshold), make it transparent
        if r >= threshold and g >= threshold and b >= threshold:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append((r, g, b, a))

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Successfully processed white transparency for: {input_path}")

def make_black_transparent(input_path, output_path=None, threshold=25):
    if output_path is None:
        output_path = input_path

    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        r, g, b, a = item
        # If the pixel is near-black (all channels below threshold), make it transparent
        if r <= threshold and g <= threshold and b <= threshold:
            new_data.append((0, 0, 0, 0))
        else:
            new_data.append((r, g, b, a))

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Successfully processed black transparency for: {input_path}")

if __name__ == "__main__":
    base_dir = r"d:\Training\working\Cybelinx\cybelinx\public"
    
    logo_light = os.path.join(base_dir, "cybelinx-logo.png")
    logo_embelem = os.path.join(base_dir, "cybelinx-logo-embelem.png")
    logo_wordmark = os.path.join(base_dir, "cybelinx-wordmark.png")
    logo_icon = os.path.join(base_dir, "cybelinx-icon.png")
    logo_dark = os.path.join(base_dir, "cybelinx-logo-dark.png")

    if os.path.exists(logo_light):
        make_white_transparent(logo_light, threshold=235)
    if os.path.exists(logo_embelem):
        make_white_transparent(logo_embelem, threshold=235)
    if os.path.exists(logo_wordmark):
        make_white_transparent(logo_wordmark, threshold=235)
    if os.path.exists(logo_icon):
        make_white_transparent(logo_icon, threshold=235)

    if os.path.exists(logo_dark):
        make_black_transparent(logo_dark, threshold=30)
