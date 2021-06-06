import React, {useEffect, useState} from "react";
import { auth, addPizza, getPizzas, deletePizza } from "../config/Fire";
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Button,
    TextField,
    Paper,
    Grid,
    Typography,
    Box
  } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirextion: 'row',
      alignItems: 'center',
    },
  
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop: 30,
    },
  
    paper: {
      padding: 30,
      height: 700,
      width: 500,
      margin: 20,
    },
  
    titleField: {
      marginLeft: 20,
      fontStyle: 'bold',
    },
  
    textFields: {
      marginTop: 20,
    },
  
    textField: {
      margin: '15px auto',
      height: 40,
    },
  
    addButton: {
      marginTop: 30,
      height: 40,
    },

    pizzas__container: {
        maxWidth: 1000,
        height: 400,
        margin: 'auto',
        marginTop: 20,
      },

  }));


  const columns = [
    {
      field: 'nameField',
      headerName: 'Pizza Name',
      width: 160,
      disableClickEventBubbling: true,
    },
  
    {
      field: 'numberField',
      headerName: 'Pizzas Number',
      width: 180,
      disableClickEventBubbling: true,
    },

    {
      field: 'deleteField',
      headerName: 'Delete',
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
          return(
            <IconButton>
              <DeleteForeverIcon />
            </IconButton>
          )
      },
    },
  ];


export default function PizzaListPage() {
    const classes = useStyles();

    const [typedPizzaName, setTypedPizzaName] = useState("");
    const [typedNumber, setTypedNumber] = useState("");
    const [user, setUser] = useState(null);
    const [pizzas, setPizzas] = useState([
        { nameField: '',  numberField: '', id: '' },
      ]);
    
    const fetchPizzas = async (u) => {
        const userPizzas = await getPizzas(u).catch(err => {
            console.log(err);
        });
        
        console.log(userPizzas);

        var pizzasInTable = [];

        userPizzas.forEach(cos => {
            pizzasInTable.push({
                nameField: cos.data.Pizza_name,
                numberField: cos.data.Pizzas_number,
                id: cos.id,
            });
          });
        
        console.log(pizzasInTable);

        setPizzas(pizzasInTable);
    }

    useEffect(() => {
        const unsubscribe =
        auth.onAuthStateChanged( async (u) => {
          if (u) {
            setUser(u);
            fetchPizzas(u);

          } else {
            console.log("User not logged")
            setUser(null);
          }
        });
        return () => unsubscribe();
      }, []);

  
    console.log(auth.currentUser)

    const addPizzas = async(e) => {
        
      e.preventDefault();

        let pizza = {
            typedPizzaName,
            typedNumber
        }

        await addPizza(user, pizza).then(() => {
            console.log("Success");
            fetchPizzas(user);
            
        }).catch(err => {
            console.log(err);
        });

    }

    const deletePizzas = async(pizza) => {
      console.log("delete", pizza);

      await deletePizza(pizza).then(() => {
          console.log("Success");
          fetchPizzas(user);
          
      }).catch(err => {
          console.log(err);
      });

      fetchPizzas(user);

  }

return (
    <div className={classes.backgroundd}>
        <Box className={classes.container}>
            <Paper elevation={3} className={classes.paper}>

                <Grid  
                 container 
                 direction="row"
                 justify="space-around"
                 alignItems="center">
                 <Typography variant="h4" className={classes.titleField}>
                    Order List
                 </Typography>

                <Grid className={classes.textFields}>
                <TextField
                 variant="filled"
                 label="Pizza Name"
                 placeholder="Enter pizza name"
                 fullWidth
                 className={classes.textField}
                 value={typedPizzaName}
                 onChange={({ target: { value } }) => {
                 setTypedPizzaName(value);
                 }}
                />

                <TextField
                 variant="filled"
                 label="Pizza number"
                 placeholder="Enter number of pizzas"
                 fullWidth
                 className={classes.textField}
                 value={typedNumber}
                 onChange={({ target: { value } }) => {
                 setTypedNumber(value);
                 }}
                />
 
                <Button
                 type="submit"
                 color="primary"
                 variant="contained"
                 size="large"
                 fullWidth
                 className={classes.addButton}
                 onClick={addPizzas}
                >
                 Add pizza
                </Button>
                <div className={classes.pizzas__container}>
                <DataGrid
                 rows={pizzas}
                 columns={columns}
                 pageSize={6}
                 checkboxSelection
                 disableSelectionOnClick={true}
                 onCellClick={(params) => {
                   if (params.field === '__check__') return;
                   if (params.field === 'deleteField') {
                     deletePizzas(params.row.id);
                   return;
                 }
                }}
                />
                </div>
                </Grid>  
                </Grid>
            </Paper>
        </Box>
    </div>
            
    );
}

