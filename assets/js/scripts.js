function changeText() {
    const text = document.getElementById("mimimiText").value;

    const replacements = [
        [/c[aou]/gi, 'qui'],
        [/gua/gi, 'güi'],
        [/gu/gi, 'gui'],
        [/gii/gi, 'gui'],
        [/gi/gi, 'gui'],
        [/qi/gi, 'qui'],
        [/[aeou]/gi, 'i'],
        [/[áéíóú]/gi, 'í'],
        [/qii/gi, 'qui'],
        [/zi/gi, 'ci'],
        [/gue/gi, 'güi']
    ];
    
    let transformedText = text;
    replacements.forEach(([pattern, replacement]) => {
        transformedText = transformedText.replace(pattern, replacement);
    });

    document.getElementById("result").value = `Mimimi, ${transformedText}, mimimi...`;
}
