import styles from "./Heading.module.css"

export function Heading(props){

    let cor = ""

    if(String(props.children).includes("Lucro")){
        cor = styles.azul
    }

    if(String(props.children).includes("Prejuízo")){
        cor = styles.vermelho
    }

    return(
        <h1 className={`${styles.heading} ${cor}`}>
            {props.children}
        </h1>
    )
}