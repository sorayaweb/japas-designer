// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
  }
  
  getYear();
  
  
  
  // isotope js filter Menu
  $(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');
  
        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });
  
    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
  });
  
  // nice select
  $(document).ready(function() {
    $('select').niceSelect();
  });
  
  
  
  
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
  modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }
  
  
  $('.alert').alert()
  
  
  
  
   
   
  document.querySelectorAll('.quantity-control').forEach(control => {
  const input = control.querySelector('.quantity-input');
  const btnDecrement = control.querySelector('.btn-decrement');
  const btnIncrement = control.querySelector('.btn-increment');
  
  btnDecrement.addEventListener('click', () => {
      let currentValue = parseInt(input.value);
      if (currentValue > 1) {
          input.value = currentValue - 1;
      }
  });
  
  btnIncrement.addEventListener('click', () => {
      let currentValue = parseInt(input.value);
      input.value = currentValue + 1;
  });
  
  // Exemplo de como usar o valor para cálculos
  function realizarCalculo() {
      let valor = parseInt(input.value);
      // Realize o cálculo desejado usando o valor
      console.log("Valor atual:", valor);
  }
  
  // Chame a função para realizar o cálculo onde necessário
  realizarCalculo();
  });
  
  
  
  
  
  // Mostrar o botão quando o usuário rolar 300px
  window.onscroll = function() { scrollFunction(); };
  
  function scrollFunction() {
      const backToTopBtn = document.getElementById("backToTopBtn");
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          backToTopBtn.style.display = "block";
      } else {
          backToTopBtn.style.display = "none";
      }
  }
  
  // Função para rolar até o topo da página
  function backToTop() {
      document.body.scrollTop = 0; // Para Safari
      document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
  }
  
  
  
  window.addEventListener("scroll", function() {
      var header = document.querySelector(".header_section");
      if (window.scrollY > 50) { // Altere 50 para o valor em pixels desejado para a transição
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

     // Seleciona o botão dropdown e o conteúdo
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');
  const dropdownItems = document.querySelectorAll('.filters_menu li');

  // Abre ou fecha o dropdown quando o botão for clicado
  dropdownBtn.addEventListener('click', function () {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  // Fecha o dropdown quando um item for clicado
  dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
      dropdownContent.style.display = 'none';
    });
  });

  // Fecha o dropdown se clicar fora dele
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown-menu-wrapper')) {
      dropdownContent.style.display = 'none';
    }
  });