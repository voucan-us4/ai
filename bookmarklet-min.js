javascript:(()=>fetch('https://us4-ubg.github.io/ai/bookmarklet.js').then(r=>r.ok?r.text():Promise.reject('Error')).then(eval).catch(e=>console.error(e)))();
