'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { Button, Card, CardContent, Checkbox, FormControlLabel, TextField } from "@mui/material";
import * as Yup from 'yup';
import { log } from 'console';


export default function Login() {
    const router = useRouter()
    const user = [{
        email: "hoangky123@gmail.com",
        password: "12345678"
    }]

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const validateLogin = Yup.object({
        password: Yup.string()
            .min(8, 'Must be 8 characters or more')
            .max(32, 'Must be 32 characters or less')
            .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
    })

    const formik = useFormik({
        initialValues: form,
        validationSchema: validateLogin,
        onSubmit: values => {
            console.log(values)
        },
    });
   
   

    const handlelogin = (e: any) => {
        formik.handleSubmit()
    }
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <Card sx={{ maxWidth: 300 }}>
                    <CardContent>
                        <h2 style={{ textAlign: 'center' }}>Login Form</h2>
                        <div>
                            <TextField error={!!formik.errors.email}
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                id="email"
                                label="Email"
                                variant="outlined"
                                helperText={formik.errors.email}
                            />

                        </div>
                        <div>
                            <TextField error={!!formik.errors.password}
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                id="password"
                                label="Password"
                                variant="outlined" type="password"
                                helperText={formik.errors.password} />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Button variant="contained" type="submit" onClick={() => router.push('/')}>Login</Button>
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}