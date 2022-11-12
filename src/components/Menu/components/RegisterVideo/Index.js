import React from "react";
import { StyledRegisterVideo } from "./Styles";
import { createClient } from "@supabase/supabase-js"; 

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

function getVideoId(url) {
    const videoId = url.split("v=")[1];
       const ampersandPosition = videoId.indexOf("&");
       if (ampersandPosition !== -1) {
           return videoId.substring(0, ampersandPosition);
       }
       return videoId;
 }

const PROJECT_URL = "https://wwadcatbxyynmjigxfbk.supabase.co";
const PUBLIC_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3YWRjYXRieHl5bm1qaWd4ZmJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTEyOTUsImV4cCI6MTk4Mzc2NzI5NX0.uFawLEkNijHn0YA-UkXYOfyElHaC2-lgP6VrDBKOz1A";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "Frost punk", url: "https://youtube.." }
    });
    const [formVisivel, setFormVisivel] = React.useState(true);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {/* Ternário */}
            {/* Operadores de Curto-circuito */}
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        console.log(formCadastro.values);

                        supabase.from("video").insert ({
                            title: formCadastro.values.title,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: "video",
                        })
                        .then((oqueveio) => {
                            console.log(oqueveio);
                        })
                        .catch((err) => {
                            console.log(err);
                         })

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input
                                placeholder="Titulo do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}