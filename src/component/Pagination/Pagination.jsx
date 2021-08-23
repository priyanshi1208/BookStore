import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './Pagination.scss';
import red from "@material-ui/core/colors/red";

class PageBar extends React.Component{
    render() {
        const secondary = red[400];
        return (
            <div >
            {/* <Pagination className="pageCounting"count={10} /> */}
            <Pagination color="red" className="pageCounting" count={10}  color="secondary" />
            {/*<Pagination count={10} color="secondary" />
                <Pagination count={10} disabled /> */}
          </div>
        )
    }
}
export default PageBar; 