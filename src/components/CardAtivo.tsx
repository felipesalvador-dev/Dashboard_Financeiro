import styles from "./CardAtivo.module.css"

export function CardAtivo(props){
    return(
        <div className={styles.card}>
            <h2>{props.titulo}</h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}