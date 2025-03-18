export function slugify(text) {
    if (!text) return '';
    return encodeURIComponent(
        text.toString()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
            .trim()
            .replace(/\s+/g, '-') // Espacios a guiones
    );
}

export function deslugify(slug) {
    if (!slug) return '';
    return decodeURIComponent(slug)
        .replace(/-/g, ' '); // Solo reemplazar guiones por espacios
} 