<script setup>
import { supabase } from '@lib/supabase/supabaseClient';
import { ref } from 'vue'
import { reset } from '@formkit/core'
// const submitted = ref(false)
const errorHandling = ref(true)
const submitHandler = async (credentials) => {
    // Let's pretend this is an ajax request:
        const { data, error } = await supabase.auth.signUp(credentials)
        console.log(data)
        if(error !== null){
            errorHandling.value = true
        }else{
            errorHandling.value = false
            reset('registration')
        }

}
</script>

<template>
    <div>
        <FormKit type="form" id="registration" submit-label="Register" @submit="submitHandler" :actions="false">
            <h1 class="text-2xl">Registration Form</h1>
            <hr class="mb-6" />
            <span v-if="!errorHandling" class="p-2 bg-green-500 rounded-md text-white">Berhasil Menambahkan user</span>
            <div class="mt-3">
                <FormKit type="text" name="email" label="Your email" placeholder="jane@example.com"
                    validation="required|email" />    
            </div>
            <div class="double">
                <FormKit type="password" name="password" label="Password" validation="required|length:6|matches:/[^a-zA-Z]/"
                    :validation-messages="{
                        matches: 'Please include at least one symbol',
                    }" placeholder="Your password" help="Choose a password" />
                <FormKit type="password" name="password_confirm" label="Confirm password" placeholder="Confirm password"
                    validation="required|confirm" help="Confirm your password" />
            </div>

            <FormKit type="submit" label="Register" />
            <!-- <pre>{{ value }}</pre> -->
        </FormKit>

    </div>
</template>