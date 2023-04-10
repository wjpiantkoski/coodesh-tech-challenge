export default number => {
    return Number(number ? number : 0).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}