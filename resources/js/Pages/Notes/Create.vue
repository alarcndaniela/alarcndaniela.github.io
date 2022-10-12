<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Notes section
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-sapn-1">
                        <div class="px-4 sm:px0">
                            <h3 class="text-lg text-gray-900">Create note</h3>
                        </div>
                    </div>
                    <div class="md:col-span-2 mt-5 md:mt-0">
                        <div class="shadow bg-white md:rounded-xl p-6">
                           <form @submit.prevent="submit">
                                <textarea
                                    class="form-input w-full border-0 rounded-md shadow-lg my-2"
                                    placeholder="Excerpt"
                                    v-model="form.excerpt">
                                </textarea>
                                <textarea
                                    class="form-input w-full border-0 rounded-md shadow-lg my-2"
                                    placeholder="Content"
                                    v-model="form.content"
                                    rows="8">
                                </textarea>
                                <button class="rounded-lg bg-indigo-500 hover:bg-indigo-700 text-white fonr-bold py-2 px-4 mt-3">
                                    Create
                                </button>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Jetstream/Welcome.vue';
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: {
        AppLayout,
        Link
    },
    data () {
        return {
            form: {
                excerpt: '',
                contet: ''
            }
        }
    },
    methods: {
        submit() {
            this.$inertia.post(
                this.route('notes.store'), {
                    excerpt: this.form.excerpt,
                    content: this.form.content,
                }
            )
    }
    }
}
</script>
