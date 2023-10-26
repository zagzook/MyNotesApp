import NewNote, { links as newNoteLinks } from "../components/NewNote"

export default function NostesPage(){
    return (
        <main>
            <NewNote />
        </main>
    )
}

export async function  action({request}) {
    const formData = await request.formData();
    const noteData = {
        title: formData.get('title'),
        content: formData.get('content')
    }
}

export function links() {
    return [
    ...newNoteLinks(),
  ]};