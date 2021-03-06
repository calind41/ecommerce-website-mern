import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import './SelectList.css'


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        minWidth: props => { return props.name === 'Show' ? 100 : props.width }
    },
}));

export default function SelectList({ initialValue, label, values, updateProps }) {

    const classes = useStyles({ name: label, width: 200 });
    const handleChange = (event) => {
        if (updateProps)
            updateProps(event.target.value);
        else
            console.log(event.target.value);
    };
    const styleContainer = label === 'Show' ? {} : { 'width': '20vw' };
    return (
        <div style={styleContainer} className='sl-container'>
            <div className='sl-label'>
                {label}
            </div>
            <FormControl className={classes.margin}>
                {/* <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel> */}
                <NativeSelect
                    id="demo-customized-select-native"
                    value={initialValue}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <option aria-label="None" value="" />
                    {
                        values.map((item) => (<option value={item}>{item}</option>))
                    }
                </NativeSelect>
            </FormControl>
        </div>
    )
}
