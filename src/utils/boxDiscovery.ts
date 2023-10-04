const messages = [
  {
    title: "Seguro de vida",
    subTitle:
      "Cuide de quem você ama de um jeito simples e que cabe no seu bolso.",
    buttonText: "Conhecer",
    widthButton: 105,
    heightButton: 40,
    imageUrl: require("@assets/discovery/homem-e-mulher.jpg"),
  },
  {
    title: "Nubank Celular Seguro",
    subTitle: "100% cobertura, 0% estresse. Simule agora mesmo.",
    buttonText: "Conhecer",
    widthButton: 105,
    heightButton: 40,
    imageUrl: require("@assets/discovery/amigos-felizes.jpg"),
  },
  {
    title: "Indique o Nu para amigos",
    subTitle: "Espalhe como é simples estar no controle.",
    buttonText: "Indicar amigos",
    widthButton: 145,
    heightButton: 40,
    imageUrl: require("@assets/discovery/friends.jpg"),
  },
  {
    title: "WhatsApp",
    subTitle: "Pagamentos seguros, rápidos e sem tarifa. A experiência ...",
    buttonText: "Quero conhecer",
    widthButton: 155,
    heightButton: 40,
    imageUrl: require("@assets/discovery/whats.jpg"),
  },
  {
    title: "Termos de uso",
    subTitle: "Explicamos o que diz esse documento do Nubank",
    buttonText: "Conhecer",
    widthButton: 105,
    heightButton: 40,
    imageUrl: require("@assets/discovery/termos.jpg"),
  },
  {
    title: "Portabilidade de salário",
    subTitle: "Liberdade é escolher onde receber seu dinheiro.",
    buttonText: "Conhecer",
    widthButton: 105,
    heightButton: 40,
    imageUrl: require("@assets/discovery/office.jpg"),
  },
  {
    title: "Traga seus dados",
    subTitle: "Mais chances de limites e produtos com a sua cara.",
    buttonText: "Saiba mais",
    widthButton: 115,
    heightButton: 40,
    imageUrl: require("@assets/discovery/mulher-sorrindo.jpg"),
  },
];

export const getRandomMessages = () => {
  const shuffled = messages.sort(() => 0.5 - Math.random()).slice(0, 5);
  return shuffled;
};
