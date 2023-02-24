# PAM_Project_TicTacToe
WebDev Project

***อ่านก่อนจะได้ไม่โง่***

1.) Clone มาซะไว้สัก Directory<br>
2.) เปิด Project เข้าไปที่ Dirที่คุณCloneมา/PAM_Project_TicTacToe/pam_project<br>
3.) พิมพ์คำสั่ง npm install ใน Editor Terminal ของคุณ<br>
4.) เวลาจะทำก็ npm run dev มันจะให้ domain local มา ก็กดไปซะ มันจะเป็นเหมือน Live server ของ VSCode น่ะแหละ แต่ถ้ามึงทำผิดมันจะด่ามึงและบอกสาเหตุว่าไฟล์ไหนบรรทัดไหน<br>



tailwind.config.cjs => custom คำสั่งบางคำสั่งสำหรับ Tailwindcss ลองดู Docs Tailwind<br>
postcss.config.cjs => Post css นั่นแหละอยากทำก็ทำได้ แต่ถ้าไม่ทำก็ไม่เสียหายเพราะไม่จำเป็น แค่ทำให้ CSS File มีขนาดเล็กลงมาก<br>
components folder => components สำหรับ Layout (UI) ถ้าทำแล้วเอาไปใส่ใน App.jsx ด้วย เหมือน Testcomp ที่เอาไปใส่ Copy testcomp.jsx ไปทำต่อก็ได้
                    จะทำในไฟล์เดียวกันก็ได้ทั้ง JS ทั้ง Style หรือคุณจะแยกก็ได้ (โปรดทำ folder: js/ไฟล์ js) ***รบกวนใช้นามสกุลไฟล์เป็น .jsx นะ มันคือ react ในแบบ Js***
                    (ความจริงคือ CLI ของ Vite ที่จะ Bundling ให้ไฟล์เราเล็กลง และCorrect จุดผิดบางอย่าง หรือการเขียนโค้ดที่ไม่จำเป็นตอน Compile ปล.นี่คือที่กูพอเข้าใจ)
                    ผมมี example.jsx ให้ดูเผื่อคุณจะดูว่ามันเป็นยังไงทำยังไงก็ลองอ่านๆดูก็ได้ แต่ถ้าไม่เข้าใจก็ทำตามที่คุณเข้าใจเลยเดี๋ยวผมมา Correct ทีหลังเอง<br>

Animation => ถ้าจะไม่ทำเองก็ใช้ gsap จะได้ร่นเวลาในการทำด้วย จะได้ไม่ต้องไปยุ่งกับ Anim มากนัก แต่ถ้าจะทำเองก็ไม่เกี่ยงได้หมดครับ<br>

แหล่งเรียนรู้เผื่ออยากจะเข้าใจ React หรือเอามาทำส่วนของตัวเอง https://reactjs.org <br>
Firebase ผมใช้ชื่อ pam-tictactoe ไม่ต้องยุ่งก็ได้เดี๋ยวตรงนี้ผมทำเอง<br>
Tailwindcss Docs https://tailwindcss.com/docs/installation <br>
Socket.io Docs https://socket.io/docs/v4/server-installation/ <br>
