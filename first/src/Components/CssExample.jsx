import React from 'react'

const myStyle = {
    heading: {
        backgroundColor: "green",
        color: "white",
        padding: 20,
        textAlign: "center"
    },
    para: {
        backgroundColor: "orange",
        color: "white",
        padding: 20,
        textAlign: "justify"
    },
    blue: { backgroundColor: "blue" },
    violet: { backgroundColor: "violet" },
    red: { backgroundColor: "red" },
    purple: { backgroundColor: "purple" },
}
export default function CssExample() {
    return (
        <div className='main'>
            <div className='center'>
                <h1>Irfan Ansari</h1>
                <h1 style={{
                    backgroundColor: "navy",
                    color: "white",
                    padding: 10,
                    textAlign: "center"
                }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, officiis!</h1>
                <h1 style={myStyle.heading}>Adipisci numquam soluta omnis ipsa velit corporis provident suscipit culpa.</h1>
                <h1 style={{ ...myStyle.heading, ...myStyle.blue }}>Unde rem earum iusto, necessitatibus mollitia dolorum animi! Totam, natus!</h1>
                <h1 style={{ ...myStyle.heading, ...myStyle.violet }}>Dolores ipsam, dolor quas consectetur delectus et eius in eum!</h1>
                <h1 style={{ ...myStyle.heading, ...myStyle.red }}>Cumque temporibus repellat vitae doloribus quam quod consequatur quisquam odio?</h1>
                <h1 style={{ ...myStyle.heading, ...myStyle.purple }}>Cumque temporibus repellat vitae doloribus quam quod consequatur quisquam odio?</h1>
                <p style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: 20,
                    textAlign: "justify"
                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias saepe nesciunt aliquid quas recusandae iusto repellat tempore quasi assumenda alias pariatur, quod dolorem harum, iure nisi aut doloribus cum quisquam facilis expedita tenetur laborum provident debitis? Ut cum eum, iusto laudantium magni, asperiores rem esse quasi maiores neque et molestias sapiente dignissimos maxime, quidem soluta omnis veritatis cumque. Laborum aliquam facilis debitis labore! Ea tempore eligendi delectus optio, repellat ducimus sapiente dolorum molestias nihil quod dicta iure voluptas, voluptatum illum eum assumenda officiis enim unde obcaecati voluptates consequatur consequuntur sint, tenetur tempora. Explicabo aliquam minus ratione, tenetur sunt voluptatibus.</p>
                <p style={{ ...myStyle.para, ...myStyle.blue }}>Iure laborum quibusdam exercitationem voluptatem rerum facere, dolore fuga eaque veritatis dolor facilis dicta cupiditate sit rem soluta perferendis cum unde explicabo? Cum architecto, suscipit officiis eveniet inventore veritatis, repudiandae, aliquam laboriosam fugit nesciunt saepe impedit porro totam facilis id consectetur quisquam. Dolores labore perspiciatis nihil fugit similique dicta tempore sequi exercitationem impedit ut eveniet, voluptatem dignissimos odio id officia quisquam dolore ratione. Blanditiis pariatur molestiae eveniet ratione magnam reiciendis enim quam itaque quasi deleniti libero delectus fugiat ducimus neque soluta ipsum praesentium, placeat sit explicabo accusantium? Molestias ducimus dolor explicabo deleniti voluptates, ipsam fugit odio, voluptatum aspernatur incidunt non.</p>
                <p style={{ ...myStyle.para, ...myStyle.violet }}>Distinctio quis ad soluta totam praesentium iure in, saepe quia. Doloribus quae, perferendis suscipit nesciunt aspernatur accusamus, sunt incidunt placeat ipsa ipsum magnam quia pariatur mollitia sit quos, culpa magni atque. Tempora molestias alias molestiae corrupti labore perspiciatis ipsa quam quo excepturi fugiat, voluptates expedita magnam suscipit. Odio corrupti fugiat quas, quo, aspernatur itaque incidunt nam nesciunt sequi odit voluptatum nemo quod placeat sunt molestiae quia unde expedita nobis. Quos odio deserunt quas architecto, perferendis voluptates aliquam laborum autem dolor veniam nisi iste. Est inventore dolorem quas nesciunt quasi pariatur? Similique amet obcaecati ad cum porro sapiente adipisci id culpa.</p>
                <p style={{ ...myStyle.para, ...myStyle.red }}>Porro, qui quae. Nam blanditiis exercitationem temporibus enim id? Fugit voluptatem animi a dolore tempora modi, quis adipisci dolorem hic possimus deleniti minus accusamus ea impedit! A quae temporibus amet officia facilis porro molestiae harum neque pariatur sapiente, explicabo doloremque repudiandae dolores saepe aliquam quia velit tempore numquam recusandae, fugiat quod aliquid totam consequuntur eos! Dolor consequatur eos quasi vel quas quod qui fuga. Soluta suscipit praesentium magni possimus minus voluptatem non, eaque iusto ratione facilis perferendis quod odit exercitationem deserunt cupiditate provident amet velit rerum obcaecati quidem voluptatum facere ipsam, alias dolore. Esse minima iste rem eum voluptatibus accusantium.</p>
                <p style={{ ...myStyle.para, ...myStyle.purple }}>Commodi, quo illum minus omnis magnam amet voluptatibus voluptatem repudiandae mollitia porro, natus animi corporis! Temporibus beatae itaque ratione! Nobis excepturi commodi unde necessitatibus veritatis perspiciatis, error fuga ipsum eligendi assumenda enim dolorem quos! Voluptas quisquam officia atque unde quo laborum, sapiente inventore itaque, vitae labore impedit eaque, repellat ipsam provident voluptates cupiditate nostrum. Harum minus similique iure aut natus explicabo odit at sed fugiat accusamus deserunt quam quis sint cum velit ipsa, eos saepe repudiandae dolorum architecto voluptatem maiores atque aliquid. Officiis nesciunt ex libero, sed earum quia? In tenetur, laborum temporibus vel dolore quo ab nulla autem animi.</p>
            </div>
        </div>
    )
}
