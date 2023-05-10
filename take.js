var take = document.querySelector('[aria-label="Take case"]'); // Seletor do take
var noTake = document.body.innerHTML.includes("Unassigned"); // validação de no take / take
var currentTime;
// function que valida se o take esta on ou não Caso não esteja com take on ele ativa o take
setTimeout(() => {
  (function () {
    if (noTake) {
      take.addEventListener("click", function () {});
      take.click();
    } else {
    }
  })();
}, 2000);

setTimeout(() => {
  alterationEmailMudPage();
}, 3000);

function alterationEmailMudPage() {
  // Alteração e-mail para o submiter
  setTimeout(() => {
    var customer = document.querySelectorAll('[aria-expanded="false"]')[9];
    customer.addEventListener("click", function () {});
    customer.click();

    var cliente = document.querySelectorAll("material-select-dropdown-item")[0];
    cliente.addEventListener("click", function () {});
    cliente.click();
  }, 6000);

  eval(
    (function (p, a, c, k, e, d) {
      e = function (c) {
        return (
          (c < a ? "" : e(parseInt(c / a))) +
          ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        );
      };
      if (!"".replace(/^/, String)) {
        while (c--) {
          d[e(c)] = k[c] || e(c);
        }
        k = [
          function (e) {
            return d[e];
          },
        ];
        e = function () {
          return "\\w+";
        };
        c = 1;
      }
      while (c--) {
        if (k[c]) {
          p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        }
      }
      return p;
    })(
      "J 6;8.4('[l-m=\"n 0\"]').f();g(()=>{8.2('.1-0-a').b(e=>{c([...e.p].q(9=>{h 9===\"s-1-0-a\"})){e.2('1-u-v').b(e=>{c(e.w.i('y 1 A B C')){e.4('d > d').f();g(()=>{6=[...e.2('G > H > I')].x((3,5)=>{h(5.j.i('F E')?5.4('D:z-k').j:3==''?'t r':3)})},7)}})}});o.0(6)},7);",
      46,
      46,
      "log|case|querySelectorAll|acc|querySelector|cell|currentTime|1000|document|el|container|forEach|if|div||click|setTimeout|return|includes|innerText|child|aria|label|Case|console|classList|some|schedule|active|Without|message|view|innerHTML|reduce|Review|last|in|Connect|Sales|td|Time|Appointment|table|tbody|tr|var".split(
        "|"
      ),
      0,
      {}
    )
  );
}

function pegaHoraData() {
  // function para pegar dia e hora da call

  document.querySelector('[aria-label="Case log"]').click();
  setTimeout(() => {
    document.querySelectorAll(".case-log-container").forEach((e) => {
      if (
        [...e.classList].some((el) => {
          return el === "active-case-log-container";
        })
      ) {
        e.querySelectorAll("case-message-view").forEach((e) => {
          if (e.innerHTML.includes("Review case in Connect Sales")) {
            e.querySelector("div > div").click();
            setTimeout(() => {
              currentTime = [
                ...e.querySelectorAll("table > tbody > tr"),
              ].reduce((acc, cell) => {
                return cell.innerText.includes("Appointment Time")
                  ? cell.querySelector("td:last-child").innerText
                  : acc == ""
                  ? "Without schedule"
                  : acc;
              });
            }, 1000);
          }
        });
      }
    });
    console.log(currentTime);
  }, 1000);
}
function emailSent() {
  // Envio de e-mail do take

  var newEmail2 = document.querySelector('[aria-label="Create a write card"]');
  newEmail2.addEventListener("click", function () {});
  newEmail2.click();

  setTimeout(() => {
    var novoEmail = document.querySelector('[aria-label="Create new email"]');
    novoEmail.addEventListener("click", function () {});
    novoEmail.click();
    setTimeout(() => {
      var formEmail = document.querySelector("[buttoncontent]");
      formEmail.addEventListener("click", function () {});
      formEmail.click();
      setTimeout(() => {
        var emailTechSolution = document.querySelectorAll(
          '[id*="email-address-id'
        )[12];
        emailTechSolution.addEventListener("click", function () {});
        emailTechSolution.click();
      }, 2000);
    }, 3000);
  }, 3000);

  setTimeout(() => {
    var nameCustomer = document.querySelector(
      '[debug-id="contact-info-name"]'
    ).innerText;
    var caseId = document.querySelector(".case-id").innerText;
    var siteCustomer =
      document.querySelectorAll('[href*="google"]')[4].innerHTML;
    document.querySelector("#email-body-content-top-content").innerHTML =
      "<br> Oi" +
      nameCustomer +
      "<br><br> Muito obrigado por agendar uma consultoria com o Time de Soluções Técnicas do Google. <br><br> O seu Representante do Google solicitou esta chamada em seu nome e te auxiliaremos no caso " +
      caseId +
      "<br><br> no seguinte dia:  " +
      currentTime +
      ".  <br><br> Por favor, verifique a sua caixa de entrada e acesse o convite no seu calendário. Siga as instruções específicas nele e confirme a sua participação. Para se preparar para a nossa chamada, por favor, revise a lista de tarefas vinculada aqui e complete as solicitações.<br><br>Se tiver qualquer dúvida antes da chamada ou se quiser adicionar outros participantes à reunião, basta nos informar respondendo a esta mensagem ou entrando em contato com o Representante do Google. Estamos animados para trabalhar com você! <br> Muito obrigado!";
  }, 6000);
}
setTimeout(() => {
  pegaHoraData();
}, 1000);
setTimeout(() => {
  emailSent();
}, 10000);
