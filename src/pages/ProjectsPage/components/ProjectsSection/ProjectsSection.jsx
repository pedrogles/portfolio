import { Section, Title } from '../../../../components';
import { Project } from '..';

import rcc_image from "../../../../assets/logo/rcc.svg";
import rv_image from "../../../../assets/logo/rv.svg";
import tre_image from "../../../../assets/logo/tre.svg";
import converx_image from "../../../../assets/logo/converx.svg";
import proreforma_image from "../../../../assets/logo/proreforma.svg";

import './projectssection.scss';

export function ProjectsSection() {
    const projects = [
        {
            id: 0,
            title: "Pro Reforma",
            img: proreforma_image,
            alt: "Logotipo com a palavra 'pro' em letras grandes, sendo o 'o' em forma de círculo vermelho. Abaixo, a palavra 'reforma' em letras menores e vermelhas.",
            paragraph: "Plataforma que facilita o planejamento, orçamento e gestão de reformas residenciais, conectando clientes a profissionais qualificados para tornar a obra mais prática, transparente e eficiente.",
            link: "https://www.pro-reforma.com/",
            text: "Visite clicando aqui."
        },
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
            img: rv_image,
            alt: "Imagem com cor de fundo bege contendo as letras R e V ao centro, com a letra 'R' incorporando um rosto feminino de traços suaves e cabelos ondulados. Abaixo das letras, destaca-se o texto 'Bendita Beleza' e após a palavra 'Cabeleireira'.",
            paragraph: "Website moderno e elegante, que destaca os serviços disponíveis e já realizados do salão, com uma experiência fácil e agradável para os visitantes.",
            link: "https://benditabeleza.vercel.app/",
            text: "Visite clicando aqui."
        },
        {
            id: 4,
            title: "Portfólio Renato César",
            img: rcc_image,
            alt: "Imagem com cor de fundo verde escuro contendo as letras R, C e C centralizadas dentro de um quadrado semifechado, referência a Renato César Carneiro.",
            paragraph: "Projeto desenvolvido com o intuito de modernizar e facilitar o compartilhamento de suas publicações, utilizando um design agradável, simples e direto.",
            link: "https://linktree-pedrogles.vercel.app/assets/portfolio-renato-cesar-4b812987.pdf",
            text: "Visite clicando aqui."
        }
    ];
    return (
        <Section>
            <Title name="Projetos Recentes" />
            <ul className="projects-list">
                {projects.map((project) => {
                    return (
                        <Project key={project.id} project={project} />
                    )
                })}
            </ul>
        </Section>
    );
};