import React from 'react';
import Table from 'react-bootstrap/Table';



function TableMenuCafe({Datacafe}){


    return(
        <div className='menu-cafe'>
        <Table striped>
        
        <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Harga</th>
          <th>Harga paket</th>
        </tr>
        </thead>
        {Datacafe.map((val) => {
          return (
            <tbody key={val.id} id={val.id}>
                <tr>
                <td>{val.no}</td>
                <td>{val.name}</td>
                <td>{val.Harga}</td>
                <td>{val.HargaPaket}</td>
                </tr>
            </tbody>
      
          )
        })}
      </Table>
        </div>
       
    )
}

export default TableMenuCafe;