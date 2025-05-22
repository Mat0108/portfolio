export const getRandomColor = () =>{
    function getReadableColor() {
      let h, s, l;

      const rand = Math.random();

      if (rand < 0.5) {
        // 50% chance : gris (hue doesn't matter, low saturation)
        h = Math.floor(Math.random() * 360);
        s = Math.floor(Math.random() * 11); // 0–10% saturation → gris
        l = Math.floor(Math.random() * 16) + 5; // 5–20% lightness → sombre
      } else {
        // 50% chance : bleu foncé ou bleu classique
        // Hue: 180–240 = cyan/bleu | 210–240 = bleu foncé pur
        do {
          h = Math.floor(Math.random() * 61) + 180; // 180–240
        } while (h >= 270 && h <= 350); // Par sécurité

        s = Math.floor(Math.random() * 31) + 70; // 70–100% saturation
        l = Math.floor(Math.random() * 16) + 5;  // 5–20% lightness
      }

      return hslToHex(h, s, l);
    }

    function hslToHex(h, s, l) {
      s /= 100;
      l /= 100;
      const k = n => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = n => {
        const c = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        return Math.round(255 * c).toString(16).padStart(2, '0');
      };
      return `#${f(0)}${f(8)}${f(4)}`;
    }

    return getReadableColor();
}