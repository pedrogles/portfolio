import user_image from "../assets/image/photo.png";
import rcc_image from "../assets/logo/rcc.png";
import rv_image from "../assets/logo/rv.svg";
import tre_image from "../assets/logo/tre.png";
import lt_image from "../assets/logo/linktree.svg";
import converx_image from "../assets/logo/converx.svg";

import { DiSass } from "react-icons/di";
import { FiFigma, FiPhone, FiMail } from "react-icons/fi";

import { SiAdobephotoshop, SiAdobeillustrator, SiNodedotjs, SiJavascript, SiReact, SiGithub, SiGit, SiLinkedin, SiWhatsapp, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";

export const user = {
    name: "Pedro Gabriel Lima e Silva",
    profession: "Desenvolvedor e Web Designer",
    image: user_image,
    altimage: "Foto do rosto de Pedro Gabriel visto de frente. Ele utiliza óculos de grau, bigode e barba rala. A foto contém fundo branco e bordas arredondadas.",
};

export const links = [
    {
        id: 1,
        icon: <SiLinkedin/>,
        href: "https://www.linkedin.com/in/pedrogles/"
    }, 
    {
        id: 2,
        icon: <SiGithub/>,
        href: "https://github.com/pedrogles"
    },
    {
        id: 3,
        icon: <SiWhatsapp/>,
        href: "https://api.whatsapp.com/send?phone=5583996082302"
    },
    {
        id: 4,
        icon: <FiPhone/>,
        href: "tel:+5583996082302"
    }, 
    {
        id: 5,
        icon: <FiMail/>,
        href: "mailto:pedrogabriellima@gmail.com"
    }
];

export const aboutme = [
    "Olá, sou Desenvolvedor Front-end e Web Designer apaixonado por criar experiências digitais interativas e amigáveis ao usuário. Tenho experiência em trabalhar com tecnologias e ferramentas modernas como JavaScript, Reactjs e Figma, buscando sempre aprender e dominar as últimas tendências em desenvolvimento web.", 
    "Aqui, você encontrará uma seleção dos meus projetos mais recentes, que demonstram minha habilidade em transformar designs complexos em interfaces de usuário limpas e eficientes.", 
    "Estou sempre aberto a novas oportunidades e desafios. Se você tem um projeto em mente ou simplesmente quer dizer oi, sinta-se à vontade para entrar em contato comigo."
];

export const experiences = [
    {
        id: 1,
        title: "Go Beesiness",
        paragraph: "Fev - Jun. 2024",
        subtitle: "Desenvolvedor Front-end / Web Designer"
    },
    {
        id: 2,
        title: "Tribunal Regional Eleitoral da Paraíba",
        paragraph: "Jan. 2023 - Fev. 2024",
        subtitle: "Web Design - Estágio"
    },
    {
        id: 3,
        title: "UNIESP - Centro Universitário",
        paragraph: "Jan. 2022 - Jun. 2022",
        subtitle: "Suporte Técnico - Estágio"
    }
];

export const educations = [
    {
        id: 1,
        title: "UNIESP - Centro Universitário",
        paragraph: "Jul. 2021 - Jan. 2024",
        subtitle: "Tecnólogo em Sistemas para Internet"
    },
    {
        id: 2,
        title: "Rocketseat",
        paragraph: "Jul. 2023 - Out. 2023",
        subtitle: "Desenvolvimento Web Full Stack"
    },
    {
        id: 3,
        title: "iTalents",
        paragraph: "Set. 2024 - Out. 2024",
        subtitle: "Bootcamp Front-end Development"
    }
];

export const skills = [
    {
        id: 1,
        name: "React",
        icon: <SiReact/>
    },
    {
        id: 2,
        name: "JavaScript",
        icon: <SiJavascript/>
    },
    {
        id: 3,
        name: "Node",
        icon: <SiNodedotjs/>
    },
    {
        id: 4,
        name: "Html5",
        icon: <SiHtml5/>
    },
    {
        id: 5,
        name: "Css3",
        icon: <SiCss3/>
    },
    {
        id: 6,
        name: "Scss",
        icon: <DiSass/>
    },
    {
        id: 7,
        name: "Tailwind",
        icon: <SiTailwindcss />
    },
    {
        id: 8,
        name: "Git",
        icon: <SiGit/>
    },
    {
        id: 9,
        name: "Github",
        icon: <SiGithub/>
    },
    {
        id: 10,
        name: "Figma",
        icon: <FiFigma/>
    },
    {
        id: 11,
        name: "Photoshop",
        icon: <SiAdobephotoshop/>
    },
    {
        id: 12,
        name: "Illustrator",
        icon: <SiAdobeillustrator/>
    }
];

export const projects = [
    {
        id: 1,
        title: "Converx - Conversor de Moedas",
        img: converx_image,
        alt: "",
        paragraph: "Ferramenta prática e eficiente que permite aos usuários converter valores entre diferentes moedas globais.",
        link: "https://converxx.vercel.app/",
        text: "Visite clicando aqui."
    },
    {
        id: 2,
        title: "Informativo TRE-PB",
        img: tre_image,
        alt: "Imagem com cor de fundo branca, contendo o texto 'Informativo TRE-PB' ao centro e logotipo posicionada acima do texto 'TRE-PB'. O logotipo é composto por 3 itens geométricos, um círculo azul com estrelas brancas em seu interior, um pentágono de cor amarela e um triângulo de cor verde, fazendo referência a bandeira do brasil.",
        paragraph: "Novo modelo de informativo focado em facilitar a leitura e acesso a informação dos usuários priorizando textos curtos, imagens e links.",
        link: "https://www.tre-pb.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tre-pb.jus.br/jurisprudencia/informativo-tre-pb/arquivos/2022/tre-pb-informativo-numero-5-do-ano-8/@@download/file/TRE-PB-informativo-numero-5-do-ano-8.pdf",
        text: "Visite clicando aqui."
    },
    {
        id: 3,
        title: "Bendita Beleza - Renata Victor",
        img: rv_image ,
        alt: "Imagem com cor de fundo bege contendo as letras R e V ao centro, com a letra 'R' incorporando um rosto feminino de traços suaves e cabelos ondulados. Abaixo das letras, destaca-se o texto 'Bendita Beleza' e após a palavra 'Cabeleireira'.",
        paragraph: "Website moderno e elegante, que destaca os serviços disponíveis e já realizados do salão, com uma experiência fácil e agradável para os visitantes.",
        link: "https://benditabeleza.vercel.app/",
        text: "Visite clicando aqui."
    },
    {
        id: 4,
        title: "Portfólio Renato César",
        img: rcc_image ,
        alt: "Imagem com cor de fundo verde escuro contendo as letras R, C e C centralizadas dentro de um quadrado semifechado, referência a Renato César Carneiro.",
        paragraph: "Projeto desenvolvido com o intuito de modernizar e facilitar o compartilhamento de suas publicações, utilizando um design agradável, simples e direto.",
        link: "https://linktree-pedrogles.vercel.app/assets/portfolio-renato-cesar-4b812987.pdf",
        text: "Visite clicando aqui."
    },  
    {
        id: 5,
        title: "LinkTree - Pedro Gabriel",
        img: lt_image,
        alt: "",
        paragraph: "Simples, direto e informativo: meu Linktree. Explore meu portfólio e conexões online com facilidade.",
        link: "https://linktree-pedrogles.vercel.app/",
        text: "Visite clicando aqui."
    }
];