import styles from './Paginado.module.css'
const Paginado =( {pages, pokemonesPerPage, allPokemones})=>{

    const pageNumbers = []

    for(let i=0;i<Math.ceil(allPokemones/pokemonesPerPage); i++){
        pageNumbers.push(i+1)

    }
    return(
        <nav className={styles.paginado}>
            <ul className={styles.pageNumbers}>
                {pageNumbers && pageNumbers.map(number=>(
                    <li key={number}>
                        <a className={styles.pageLink}onClick={()=>pages(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Paginado