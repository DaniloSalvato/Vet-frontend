import styles from "./styles.module.css";
import imgBackground from "../../assets/animais.jpg"
import Card from "../card/index";

function Main() {
  const passos = [
    {
      title: "Passo 1º",
      subtitle: "Cadastro de Donos e Animais",
      description:
        "Registre informações dos donos e de seus animais de estimação.",
      steps: [
        "Preencha os dados do dono",
        "Adicione informações do animal",
        "Salve os detalhes do cadastro.",
      ],
    },
    {
      title: "Passo 2º",
      subtitle: "Agendamento de Consultas",
      description: "Agende consultas veterinárias para os animais.",
      steps: [
        "Selecione a data desejada para a consulta.",
        "Especifique o motivo da consulta: Exame de rotina, tratamento, etc.",
        "Confirme o agendamento.",
      ],
    },
    {
      title: "Passo 3º",
      subtitle: "Registro de Diagnóstico",
      description: "Registre diagnósticos e resultados das consultas.",
      steps: [
        "Após a consulta, insira os detalhes do diagnóstico.",
        "Registre os resultados e recomendações.",
        "Salve o diagnóstico para referência futura.",
      ],
    },
  ];
  return (
    <main>
      <section className={styles.imagem}>
        <img
          className={styles.container}
          src={imgBackground}
          alt="Background"
          title="Background"
        />
        <div className={styles.texto}>Little paw</div>
      </section>

      <section className={styles.cards}>
        {passos.map((passo, index) => (
          <Card 
            key={index}
            title={passo.title}
            description={passo.description}
            steps={passo.steps}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
