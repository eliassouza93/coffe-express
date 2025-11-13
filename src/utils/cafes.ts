export default interface CafeInterface {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

export const cafesObj: CafeInterface[] = [
  {
    id: 1,
    nome: "Café Expresso",
    preco: 8.5,
    imagem:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
  },
  {
    id: 2,
    nome: "Cappuccino",
    preco: 10.0,
    imagem:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400",
  },
  {
    id: 3,
    nome: "Latte",
    preco: 9.5,
    imagem:
      "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=400",
  },
  {
    id: 4,
    nome: "Mocha",
    preco: 11.0,
    imagem: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400",
  },
  {
    id: 5,
    nome: "Macchiato",
    preco: 9.0,
    imagem:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    nome: "Café Americano",
    preco: 7.5,
    imagem:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400",
  },
  {
    id: 7,
    nome: "Café Gelado",
    preco: 9.0,
    imagem: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    nome: "Café com Leite",
    preco: 8.0,
    imagem:
      "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    nome: "Café Caramelo",
    preco: 10.5,
    imagem:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 10,
    nome: "Café com Chocolate",
    preco: 11.5,
    imagem:
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    nome: "Café Baunilha",
    preco: 10.0,
    imagem:
      "https://plus.unsplash.com/premium_photo-1677607237201-64668c2266ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    nome: "Affogato",
    preco: 12.0,
    imagem:
      "https://plus.unsplash.com/premium_photo-1674327105076-36c4419864cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 13,
    nome: "Café Irlandês",
    preco: 13.5,
    imagem:
      "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=400",
  },
  {
    id: 14,
    nome: "Café com Creme",
    preco: 9.8,
    imagem:
      "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 15,
    nome: "Café com Canela",
    preco: 9.2,
    imagem:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400",
  },
  {
    id: 16,
    nome: "Cold Brew",
    preco: 10.8,
    imagem: "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fHww",
  },
  {
    id: 17,
    nome: "Café Italiano",
    preco: 9.9,
    imagem: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400",
  },
  {
    id: 18,
    nome: "Café de Avelã",
    preco: 11.3,
    imagem:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlfGVufDB8fDB8fHww",
  },
  {
    id: 19,
    nome: "Café Vegano de Amêndoas",
    preco: 12.5,
    imagem:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400",
  },
  {
    id: 20,
    nome: "Café Orgânico Premium",
    preco: 14.0,
    imagem:
      "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww",
  },
];
