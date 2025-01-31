'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { EditUserProfileSchema } from "@/lib/types"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
const ProfileForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode:'onChange',
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    })
    return (
        <Form {...form}>
            <form
                className="flex flex-col gap-6"
                onSubmit={() => {}}
            >
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="name"
                    render={ ({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">
                                User full name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Name"
                                    {...field}
                                /> 
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="email"
                    render={ ({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">
                                User email address
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Name"
                                    {...field}
                                /> 
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
export default ProfileForm