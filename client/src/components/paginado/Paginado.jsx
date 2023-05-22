import React from 'react';
import styles from './Paginado.module.css';

const Paginado = ({ pages, pokemonesPerPage, allPokemones, currentPage }) => {
 const pageNumbers = [];
  
 for (let i = 0; i < Math.ceil(allPokemones / pokemonesPerPage); i++) {
      pageNumbers.push(i + 1); }
  
const handlePreviousPage = () => {
     if (currentPage > 1) {
        pages(currentPage - 1);}};
  
const handleNextPage = () => {
     if (currentPage < pageNumbers.length) {
        pages(currentPage + 1); }};
  
return (
      <nav className={styles.paginado}>
        <ul className={styles.pageNumbers}>
          <li>
            <button
              className={`${styles.pageLink} ${currentPage === 1 ? styles.disabled : ''}`}
              onClick={handlePreviousPage} disabled={currentPage === 1} > Previous </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                className={`${styles.pageLink} ${number === currentPage ? styles.activePage : ''}`}
                onClick={() => pages(number)}> {number} </button>
            </li>  ))}
          <li>
            <button
              className={`${styles.pageLink} ${currentPage === pageNumbers.length ? styles.disabled : ''}`}
              onClick={handleNextPage} disabled={currentPage === pageNumbers.length}> Next </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Paginado;
  