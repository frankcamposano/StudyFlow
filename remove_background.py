#!/usr/bin/env python3
"""
Script para remover completamente el fondo de las imágenes de animales
Hace transparente todo excepto el animal
"""

from PIL import Image
from pathlib import Path
import numpy as np

def remove_all_background(image_path, output_path):
    """
    Remueve TODO el fondo dejando SOLO el animal con transparencia
    Usa detección de colores más inteligente
    """
    try:
        img = Image.open(image_path)
        
        # Convertir a RGBA
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Convertir a array numpy para procesamiento más rápido
        img_array = np.array(img)
        
        # Obtener altura y ancho
        height, width = img_array.shape[:2]
        
        # Crear máscara de transparencia
        # Detectar píxeles que NO son fondo
        r = img_array[:,:,0].astype(float)
        g = img_array[:,:,1].astype(float)
        b = img_array[:,:,2].astype(float)
        
        # Detección de fondo: píxeles que son muy similares en los 3 canales
        # o que son muy claros (blanco/gris)
        
        # Condición 1: Píxeles muy blancos (R, G, B > 230)
        is_white = (r > 230) & (g > 230) & (b > 230)
        
        # Condición 2: Píxeles muy morados (típico de fondo degradado)
        # Morado fuerte: R~100-150, G~50-100, B~150-200
        is_purple = (r > 80) & (r < 160) & (g < 120) & (b > 120) & (b < 220)
        
        # Condición 3: Píxeles grises (R ≈ G ≈ B y altos)
        color_diff = np.abs(r - g) + np.abs(g - b) + np.abs(r - b)
        is_gray = (color_diff < 30) & (r > 200)
        
        # Combinar todas las condiciones de fondo
        is_background = is_white | is_purple | is_gray
        
        # Aplicar la máscara al canal alpha
        img_array[is_background, 3] = 0  # Transparente
        img_array[~is_background, 3] = 255  # Opaco
        
        # Convertir de vuelta a imagen PIL
        result = Image.fromarray(img_array, 'RGBA')
        result.save(output_path, 'PNG')
        print(f"✓ {Path(output_path).name} - Solo animal, fondo transparente")
        return True
    except Exception as e:
        print(f"✗ Error en {image_path}: {e}")
        return False

def main():
    images_dir = Path('public/images')
    
    if not images_dir.exists():
        print(f"Error: La carpeta {images_dir} no existe")
        return
    
    image_files = sorted(images_dir.glob('*.png'))
    
    if not image_files:
        print(f"No se encontraron archivos PNG en {images_dir}")
        return
    
    print("=" * 60)
    print("REMOVER FONDO - DEJAR SOLO EL ANIMAL")
    print("=" * 60)
    print(f"Procesando {len(image_files)} imágenes...\n")
    
    success = 0
    for image_file in image_files:
        if remove_all_background(str(image_file), str(image_file)):
            success += 1
    
    print(f"\n{'=' * 60}")
    print(f"✓ {success}/{len(image_files)} imágenes procesadas")
    print(f"{'=' * 60}")
    print("✓ ¡Listo! Solo los animales, sin fondo!")

if __name__ == '__main__':
    main()
