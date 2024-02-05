import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { axiosClient } from "../../api/axios"
import { useNavigate } from "react-router-dom"
import { CELIA_DASHBOARD_ROUTE } from '../../router/index.jsx'
import { Loader } from 'lucide-react'
const formSchema = z.object({
    email: z.string({
        message: "Veuillez fournir une adresse e-mail valide.",
    }).email({
        message: "Veuillez fournir une adresse e-mail valide.",
    }).min(2, {
        message: "L'adresse e-mail doit comporter au moins 2 caractères.",
    }),
    password: z.string({
        message: "Veuillez fournir un mot de passe valide.",
    }).min(2, {
        message: "Le mot de passe doit comporter au moins 2 caractères.",
    }),
})


const User = () => {
    const navigate = useNavigate();
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "celia@gmail.com",
            password: '123456789'
        },
    })
    const { setError, formState: { isSubmitting } } = form
    const onSubmit = async (values) => {
        await axiosClient.get('/sanctum/csrf-cookie');
        await axiosClient.post('/login', values).then(
                (values)=>{
                    if(values.status===204) {
                        navigate(CELIA_DASHBOARD_ROUTE);
                    }
                }).catch (({response}) =>{
            // console.error("Erreur de requête POST:", response.data.errors);
            setError('email',{
                message:response.data.errors.email.join()
            })
            isSubmitting

        })
    }


    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="password" {...field} type={'password'} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isSubmitting} type="submit">
                        {isSubmitting && <Loader className={'animate-spin mx-2 my-2'} /> }
                        Login </Button>
                </form>
            </Form>
        </>
    )
}

export default User
