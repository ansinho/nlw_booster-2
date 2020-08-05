import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEIlAWCHPLpOA/profile-displayphoto-shrink_800_800/0?e=1602115200&v=beta&t=eZfUnZVm65XU1VljWkbN7GMAook9qaRDflbHAhaCA5g" alt="Neander Wendel" />
                <div>
                    <strong>Neander Wendel</strong>
                    <span>Judô</span>
                </div>
            </header>
            <p>
                No fundamental sentava igual ao L do death note.
                        <br /><br />
                        Por não aguentar mais as chacotas da vida, começou a lutar jodô para descer a porrada em geral. Hoje é professor de ED.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 500.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;