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
                            <h3 class="text-lg text-gray-900">Notes list</h3>
                            <p class="text-sm text-gray-600">toma y ejecuta cualquier funcion (ver. editar. eliminar)</p>
                            <div class="mt-4">
                                <Link :href="route('notes.create')" class="rounded-lg bg-indigo-500 hover:bg-indigo-700 text-white fonr-bold py-2 px-4">
                                + Create new note
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-2 mt-5 md:mt-0">
                        <div class="shadow bg-white  md:rounded-xl p-6">
                            <div class="flex justify-center">
                                <input type="text" class="form-input rounded-lg shadow-xl border-0 w-96 bg-gray-50 mb-10 py-3" placeholder="Search" v-model="q">
                            </div>
                            <table>
                                <tr v-for="note in notes" v-bind:key="note.id">
                                    <td class="border px-4 py-2">
                                        {{ note.excerpt }}
                                    </td>
                                    <td class="px-4 py-2">
                                        <Link :href="route('notes.show', note.id)">
                                            See more
                                        </Link>
                                    </td>
                                    <td class="px-4 py-2">
                                        <Link :href="route('notes.edit', note.id)">
                                            Edit
                                        </Link>
                                    </td>
                                    <td class="px-4 py-2">
                                        <button @click.prevent="destroy(note.id)"
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                                            >Eliminar
                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: {
        AppLayout,
        Link
    },
    props: {
        notes: Array,
    },
    methods: {
        destroy(id) {
            if(confirm('Are you sure you want to delete this note?')) {
                this.$inertia.delete(
                    this.route('notes.destroy', id)
                )
            }
        }
    },
    data() {
        return {
            q: ''
        }
    },
    watch: {
        q: function (value) {
            this.$inertia.get(this.route('notes.index', {q: value}), {}, {preserveState: true})
        }
    }
}
</script>
