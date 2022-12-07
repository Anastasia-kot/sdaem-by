import Image from 'next/image'
import styles from './Pagination.module.scss'
import React, { Component, useState } from 'react';
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
 
type Props = {
    totalCount: number
    currentPage: number
}
export const Pagination = ({ totalCount, currentPage }) => {
    let arr: Array<number> = [];
    for (let i = 1; i <= totalCount; i++) {
        arr.push(i) 
    }

    return (
        <nav>
            <ol className={styles.Pagination}>

                {arr.map(a => <li key={arr.indexOf(a)} className={a === currentPage ?styles.active: ''}>{a}</li>)}
           
            </ol>
        </nav>
    )
}




















export const CommentList = (props) => { 
        let commentNodes =  props.data.map(function (comment, index) {
            return (
                <li key={index} className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{comment.comment}</h5>
                    </div>
                    <small>From {comment.username}.</small>
                </li>
            );
        });

        return (
            <div id="project-comments" className="commentList">
                <ul className="list-group">{commentNodes}</ul>
            </div>
        );
}


export const Pagination2 = (props) => {
    // static propTypes = {
    //     url: PropTypes.string.isRequired,
    //     author: PropTypes.string.isRequired,
    //     perPage: PropTypes.number.isRequired,
    // };

    // constructor(props) {
    //     super(props);

    //     this.state = {
            // data: [],
            // offset: 0,
    //     };
    // }

    const [state, setState] = useState({
        data: [],
        offset: 0,
    })

   let loadCommentsFromServer= ()=> {}
    loadCommentsFromServer();
 

    let handlePageClick = (data) => {
        console.log('onPageChange', data);
        let selected = data.selected;
        let offset = Math.ceil(selected * props.perPage);

        // setState({ offset: offset }, () => {
        //     loadCommentsFromServer();
        // });
    };

    
        const currentPage = Math.round(state.offset / props.perPage);
        return (
            <div className="commentBox">
                {/* <MyPaginate
                    pageCount={20}
                    onPageChange={this.handlePageClick}
                    forcePage={currentPage}
                /> */}
                <CommentList data={state.data} />
                {/* Here the pagination component is styled thanks to Bootstrap
        classes. See https://getbootstrap.com/docs/5.1/components/pagination */}
                <nav aria-label="Page navigation comments" className="mt-4">
                    <ReactPaginate
                        previousLabel="previous"
                        nextLabel="next"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={20}
                        pageRangeDisplayed={4}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName="pagination justify-content-center"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        activeClassName="active"
                        // eslint-disable-next-line no-unused-vars
                        hrefBuilder={(page, pageCount, selected) =>
                            page >= 1 && page <= pageCount ? `/page/${page}` : '#'
                        }
                        hrefAllControls
                        forcePage={currentPage}
                        onClick={(clickEvent) => {
                            console.log('onClick', clickEvent);
                            // Return false to prevent standard page change,
                            // return false; // --> Will do nothing.
                            // return a number to choose the next page,
                            // return 4; --> Will go to page 5 (index 4)
                            // return nothing (undefined) to let standard behavior take place.
                        }}
                    />
                </nav>
            </div>
        );
}




// const container = document.getElementById('react-paginate');
// const root = createRoot(container);
// root.render(
//     <App url={'http://localhost:3000/comments'} author={'adele'} perPage={6} />
// );









