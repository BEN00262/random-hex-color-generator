import generate_random_colors from '..';

describe('functionality tests', () => {
    test('generate n numbers of colors that are unique', () => {
        let generated_colors = generate_random_colors(12);
        expect(generated_colors.length).toBe(12);
    })
    
    test('generate n numbers of colors and ensure that they match a hex color regex', () => {
        let generated_colors = generate_random_colors(12);
        expect(generated_colors.map(x => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(x)).every(u => u)).toBe(true);
    })
})