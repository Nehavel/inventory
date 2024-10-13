import React, { useEffect, useState } from 'react';
import {MaterialReactTable} from 'material-react-table';
import { useSelector, useDispatch } from 'react-redux'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  ThemeProvider,
  createTheme,

} from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import { fetchProducts,deleteProduct, editProduct, disableProduct, analyzeProduct } from '../store/action';
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
const ProductTable = ({userType}) => {
  const [editData, setEditData] = useState(null); 
  const [open, setOpen] = useState(false); 
  const [staticRowIndex, setStaticRowIndex] = useState(null);
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(fetchProducts()).then(() => dispatch(analyzeProduct()))
  },[]);

  const handleEdit = (row,staticRowIndex) => {
    setStaticRowIndex(staticRowIndex)
    setEditData(row);
    setOpen(true);
  };
  const handleDisable = (staticRowIndex)=>{
    dispatch(disableProduct(staticRowIndex)).then(() => dispatch(analyzeProduct()))
  }
  const handleDelete = (staticRowIndex) => {
    dispatch(deleteProduct(staticRowIndex)).then(() => dispatch(analyzeProduct()))
  };

  const handleClose = () => {
    setOpen(false);
    setEditData(null);
    setStaticRowIndex(null);
  };

  const handleSave = () => {
    dispatch(editProduct({editData,index: staticRowIndex})).then(() => dispatch(analyzeProduct()))
    handleClose();
  };
  let columns =  [
          { accessorKey: 'name', header: 'Name',
            Cell: ({ row }) => ( <span
              style={{
                textDecoration: row.original.disabled
                  ? 'line-through'
                  : 'none',
              }}
            >
              {row.original.name}
            </span> )
           },
          { accessorKey: 'category', header: 'category',
            Cell: ({ row }) => ( <span
              style={{
                textDecoration: row.original.disabled
                  ? 'line-through'
                  : 'none',
              }}
            >
              {row.original.category}
            </span> )
           },
          { accessorKey: 'price', header: 'price',
            Cell: ({ row }) => ( <span
              style={{
                textDecoration: row.original.disabled
                  ? 'line-through'
                  : 'none',
              }}
            >
              {row.original.price}
            </span> )
           },
          { accessorKey: 'quantity', header: 'quantity',
            Cell: ({ row }) => ( <span
              style={{
                textDecoration: row.original.disabled
                  ? 'line-through'
                  : 'none',
              }}
            >
              {row.original.quantity}
            </span> )
           },
          { accessorKey: 'value', header: 'value',
            Cell: ({ row }) => ( <span
              style={{
                textDecoration: row.original.disabled
                  ? 'line-through'
                  : 'none',
              }}
            >
              {row.original.value}
            </span> )
           },
          {
            id: 'actions',
            header: 'Actions',
            Cell: ({ row, staticRowIndex }) => ( 
              <>
                <IconButton disabled= {(userType === 'user')} onClick={() => handleEdit(row.original,staticRowIndex)}>
                  <Edit />
                </IconButton>
                <IconButton disabled= {(userType === 'user')} onClick={() => handleDisable(staticRowIndex)}>
                  <Visibility />
                </IconButton>
                <IconButton disabled= {(userType === 'user')} onClick={() => handleDelete(staticRowIndex)}>
                  <Delete />
                </IconButton>
              </>
            ),
          },
        ]
        return (
    <ThemeProvider theme={darkTheme}>   
    <>
      <MaterialReactTable
      enablePagination={false} 
      enableSorting ={false}
      enableTopToolbar={false} 
      enableColumnActions={false}
        columns={columns}
        data={products}
      />

      {/* Dialog for Editing */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Data</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={editData?.name || ''}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Category"
            fullWidth
            value={editData?.category || ''}
            onChange={(e) => setEditData({ ...editData, category: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Price"
            fullWidth
            value={editData?.price || ''}
            onChange={(e) => setEditData({ ...editData, price: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Quantity"
            fullWidth
            value={editData?.quantity || ''}
            onChange={(e) => setEditData({ ...editData, quantity: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Value"
            fullWidth
            value={editData?.value || ''}
            onChange={(e) => setEditData({ ...editData, value: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
    </ThemeProvider>
  );
};

export default ProductTable;
