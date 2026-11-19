"""EasyBloc micro:bit Mode classe — fabrication de l'icone de l'exe (icone.ico + icone.png), nov. 2026.

Variante C choisie par l'utilisateur : la carte micro:bit (matrice 5 x 5 avec un coeur rouge, boutons A et B, connecteur
dore) posee sur un petit robot (chassis bleu, deux roues), sans fond. Dessin a 1024 px puis reduit pour chaque taille
(16 a 256 px). Aucune photo, aucun element sous droits.

Lancement depuis le dossier du logiciel :  python outils/icone/creer_icone.py
"""
import os
from PIL import Image, ImageDraw

ICI = os.path.dirname(os.path.abspath(__file__))
LOGICIEL = os.path.normpath(os.path.join(ICI, '..', '..'))
G = 1024 / 100.0          # dessin decrit sur une grille de 100 x 100


def r(d, x, y, w, h, rayon, couleur):
    d.rounded_rectangle([x * G, y * G, (x + w) * G, (y + h) * G], radius=rayon * G, fill=couleur)


def cercle(d, cx, cy, rayon, couleur):
    d.ellipse([(cx - rayon) * G, (cy - rayon) * G, (cx + rayon) * G, (cy + rayon) * G], fill=couleur)


def carte(d, ox, oy, k):
    """Carte micro:bit decrite sur 100 x 80, placee en (ox, oy) a l'echelle k."""
    R = lambda x, y, w, h, ray, c: r(d, ox + x * k, oy + y * k, w * k, h * k, ray * k, c)
    C = lambda cx, cy, ray, c: cercle(d, ox + cx * k, oy + cy * k, ray * k, c)
    R(2, 62, 96, 16, 3, '#c9a227')
    for x in (8, 45.5, 83):
        R(x, 64, 9, 12, 1, '#3a3a40')
    R(2, 2, 96, 66, 9, '#1f1f24')
    for cx in (15, 85):
        C(cx, 33, 7, '#4a4a52')
        C(cx, 33, 4, '#111111')
    coeur = {(1, 1), (3, 1), (0, 2), (1, 2), (2, 2), (3, 2), (4, 2), (1, 3), (2, 3), (3, 3), (2, 4)}
    for ligne in range(5):
        for col in range(5):
            R(31 + col * 9, 11 + ligne * 9, 6, 6, 1, '#ff3b30' if (col, ligne) in coeur else '#3a1418')


def dessiner():
    im = Image.new('RGBA', (1024, 1024), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    r(d, 10, 50, 80, 26, 8, '#1f6fd1')          # chassis du robot
    for cx in (24, 76):                         # roues
        cercle(d, cx, 80, 13, '#222222')
        cercle(d, cx, 80, 5, '#888888')
    r(d, 44, 44, 12, 8, 0, '#555555')           # support de la carte
    carte(d, 16, 6, 0.68)
    return im


def main():
    grand = dessiner()
    tailles = [256, 128, 64, 48, 32, 24, 16]
    images = [grand.resize((t, t), Image.LANCZOS) for t in tailles]
    images[0].save(os.path.join(LOGICIEL, 'icone.ico'), format='ICO', sizes=[(t, t) for t in tailles],
                   append_images=images[1:])
    images[0].save(os.path.join(LOGICIEL, 'icone.png'))
    print('icone.ico et icone.png ecrits dans', LOGICIEL)


if __name__ == '__main__':
    main()
