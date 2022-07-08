import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { REMOVE } from '../redux/action/action';



const Header = () => {

    const dispatch = useDispatch()
    const getData = useSelector((state) => state.cartreducer);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRemove = (e) => {
        dispatch(REMOVE(e))
    }
    return (
        <>
            <Navbar bg="dark" variant="dark " style={{ height: '60px' }}>
                <Container>
                    <NavLink to="/" className=" text-decoration-none text-light mx-3 ">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className=" text-decoration-none text-light px-3">Home</NavLink>
                    </Nav>
                    <Badge badgeContent={getData.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, curser: "pointer" }}></i>
                    </Badge>
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        (getData.length > 0) ?
                            <div className='card_details' style={{ width: "24rem", padding: "10" }}>
                                <table className='table table-striped table-bordered table-hover text-center'>
                                    <thead>
                                        <tr>
                                            <th colSpan={4}>Website : Chetu India</th>
                                        </tr>
                                        <tr>
                                            <th >Name </th>
                                            <th >Price </th>
                                            <th colSpan={2}>company </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getData.map((data, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <th>  {data.name}</th>
                                                        <th>{data.price}</th>
                                                        <th> {data.company}</th>
                                                        <th><p style={{ fontSize: 20, cursor: "pointer" }}><i className='fas fa-trash' onClick={() => handleRemove(data)}> </i></p></th>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <p className='text-center'>Total:₹ {
                                    getData.reduce((acc, data) => {
                                        return acc + data.price
                                    }, 0)
                                } </p>
                            </div> :
                            <div className='card_details d-flex justify-content-center'  >
                                <i className='fas fa-close smallclose' onClick={handleClose} style={{ position: 'absolute', top: 2, right: 20, fontSize: 23, cursor: 'pointer' }} x></i>
                                <p style={{ fontSize: 20 }}>Your Cart is Empty! </p>
                            </div>
                    }
                </Menu>
            </Navbar>
        </>
    )
}

export default Header;