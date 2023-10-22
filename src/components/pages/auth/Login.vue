<script setup>
import { ref,reactive } from 'vue'
import { supabase } from '@lib/supabase/supabaseClient';
import { reset } from '@formkit/core'
import {useRouter} from 'vue-router'
// const submitted = ref(false)

const router = useRouter()
const errorHandling = ref(true)
const submitHandler = async (credentials) => {
try {
    const { data, error } = await supabase.auth.signInWithPassword(credentials)
    if(error !== null){
        console.log(error)
    }else{
        errorHandling.value = false
        console.log(data)
    }
    reset('login')

} catch (error) {
    console.log(error)
}
}
</script>

<template>
        <div>
            <FormKit type="form" id="login" submit-label="Login"
                @submit="submitHandler" :actions="false" #default="{ value }">
                <h1 class="text-2xl">Login Form</h1>
                <hr class="mb-6" />
                <span v-if="!errorHandling" class="p-2 bg-green-500 rounded-md text-white">Login berhasil</span>
                <div class="mt-3">
                    <FormKit type="text" name="email" label="Your email" placeholder="email" validation="required" />
                    <FormKit type="password" name="password" label="Your password" placeholder="*******"
                        validation="required|password" />
    
                    <FormKit type="submit" label="Login" />
                </div>
                <!-- <pre wrap>{{ value }}</pre> -->
            </FormKit>
            <!-- <div v-if="submitted">
            <h2>Submission successful!</h2>
        </div> -->
        </div>
</template>
