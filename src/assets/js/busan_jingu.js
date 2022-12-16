// GNB 열기
function openGnb() {
  const $gnbTarget = document.querySelectorAll('.sub_header, .dim');
  // const $gnb = document.querySelectorAll('#gnb');/
  document.querySelector('body').classList.add('overflow-hidden');

  $gnbTarget.forEach(el => {
    el.classList.add('active');
  });
}
openGnb();

// GNB 세부메뉴 열기/닫기
document.addEventListener('click', e => {
  let $eTarget = e.target;
  if ($eTarget.closest('#gnb > ul > li > a')) {
    $eTarget = $eTarget.closest('#gnb > ul > li > a');
    document.querySelectorAll('#gnb > ul > li > a').forEach(el => {
      el.classList.remove('on');
    });
    $eTarget.classList.add('on');
  }
});

// GNB 닫기
function closeGnb() {
  const $gnbTarget = document.querySelectorAll('.sub_header, .dim');
  $gnbTarget.forEach(el => {
    el.classList.remove('active');
  });
  document.querySelector('body').classList.remove('overflow-hidden');
}
closeGnb();

// GNB list클릭시 닫기
document.addEventListener('click', e => {
  let $eTarget = e.target;
  if ($eTarget.closest('#gnb .depth li, .lang-container a, .lang-container input')) {
    closeGnb();
  } else if ($eTarget.closest('#notice')) {
    closeGnb();
  }
});

// 커스텀 셀렉트박스
function jg_customSelect() {
  // 옵션 보이기/숨기기
  document.addEventListener('click', e => {
    let $eTarget = e.target;
    if ($eTarget.closest('.jg_common_selected')) {
      $eTarget = $eTarget.closest('.jg_common_selected');
      $eTarget.parentElement.querySelectorAll('.jg_common_select_list').forEach(el => {
        el.classList.toggle('active');
      });
    }
  });
  // 선택된 항목 변경
  document.addEventListener('change', e => {
    let $eTarget = e.target;
    if ($eTarget.closest('.jg_common_selectbox input')) {
      $eTarget = $eTarget.closest('.jg_common_selectbox input');
      let selectedVal = $eTarget.closest('.jg_common_select_item').querySelector('span').innerText;

      $eTarget.closest('.jg_common_select_list').classList.remove('active');
      $eTarget
        .closest('.jg_common_select_list')
        .parentElement.querySelectorAll('.jg_common_selected')
        .forEach(el => {
          el.querySelector('span').innerText = selectedVal;
        });
    }
  });
}
jg_customSelect();

// 커스텀 셀렉트박스 (AI 통번역)
function aiTranslation() {
  // 옵션 보이기/숨기기
  document.addEventListener('click', e => {
    let $eTarget = e.target;
    if ($eTarget.closest('.jg_ai_tran_selected')) {
      $eTarget = $eTarget.closest('.jg_ai_tran_selected');
      $eTarget.parentElement.querySelectorAll('.jg_ai_tran_select_list').forEach(el => {
        el.classList.toggle('active');
      });
    }
  });
  // 선택된 항목 변경
  document.addEventListener('change', e => {
    let $eTarget = e.target;
    if ($eTarget.closest('.jg_ai_tran_selectbox input')) {
      $eTarget = $eTarget.closest('.jg_ai_tran_selectbox input');
      let selectedVal = $eTarget.closest('.jg_ai_tran_select_item').querySelector('span').innerText;
      console.log(selectedVal);
      $eTarget.closest('.jg_ai_tran_select_list').classList.remove('active');
      $eTarget
        .closest('.jg_ai_tran_select_list')
        .parentElement.querySelectorAll('.jg_ai_tran_selected')
        .forEach(el => {
          el.querySelector('span').innerText = selectedVal;
        });
    }
  });
  // textarea 입력 시 x 버튼 보이기/숨기기
  document.addEventListener('input', e => {
    let $eTarget = e.target;
    if ($eTarget.closest('.jg_ai_tran_body textarea')) {
      $eTarget = $eTarget.closest('.jg_ai_tran_body textarea');
      const $resetBtn = $eTarget.parentElement.querySelector('.jg_ai_tran_reset');

      if ($eTarget.value.length > 0) {
        if (!$resetBtn.classList.contains('active')) {
          $resetBtn.classList.add('active');
        }
      } else {
        if ($resetBtn.classList.contains('active')) {
          $resetBtn.classList.remove('active');
        }
      }
    }
  });
  // x 버튼 클릭 시 textarea 내용 리셋
  document.addEventListener('click', e => {
    let $eTarget = e.target;
    if ($eTarget.closest('.jg_ai_tran_reset')) {
      $eTarget = $eTarget.closest('.jg_ai_tran_reset');
      $eTarget.parentElement.querySelector('textarea').value = '';
      $eTarget.classList.remove('active');
    }
  });
}
aiTranslation();

// FAQ 열기/닫기
function jg_faq() {
  document.addEventListener('click', e => {
    let $eTarget = e.target;

    if ($eTarget.closest('.jg_faq_question')) {
      $eTarget = $eTarget.closest('.jg_faq_question ');
      $eTarget.classList.toggle('active');
    }
  });
}
jg_faq();

// 셀렉트박스
function jg_sltBox() {
  let hasClass = false;
  document.addEventListener('click', e => {
    let $eTarget = e.target;

    if ($eTarget.closest('.slt_box > a')) {
      $eTarget = $eTarget.closest('.slt_box > a');
      if (hasClass === false) {
        $eTarget.parentElement.classList.add('on');
        hasClass = true;
      } else {
        $eTarget.parentElement.classList.remove('on');
        hasClass = false;
      }
    }
    if (!$eTarget.classList.contains('btn')) {
      document.querySelectorAll('.slt_box').forEach(el => {
        el.classList.remove('on');
      });
    }
    if ($eTarget.closest('.slt_box.change li > a')) {
      $eTarget = $eTarget.closest('.slt_box.change li > a');
      const txt = $eTarget.innerText;
      $eTarget.closest('.slt_box').querySelector(':scope > a').innerText = txt;
    }
  });
}
jg_sltBox();
