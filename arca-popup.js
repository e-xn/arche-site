(function () {
  function setRecord(record, asset, title, meta, detail) {
    if (!record) return;
    var image = record.querySelector('img');
    image.src = 'https://raw.githubusercontent.com/e-xn/ARCHE/main/' + asset + '.webp';
    image.alt = asset;
    record.querySelector('small').textContent = meta;
    record.querySelector('h4').textContent = title;
    record.querySelector('p').textContent = detail;
  }

  var anomaly = document.getElementById('anomaly');
  if (anomaly) {
    var grouped = Array.prototype.slice.call(anomaly.querySelectorAll('.unit'));
    var exitium = grouped.filter(function (unit) { return unit.querySelector('.unit-head').textContent.indexOf('EXITIUM / REX') >= 0; })[0];
    if (exitium) {
      var rows = exitium.querySelectorAll('.record');
      exitium.querySelector('.unit-head').innerHTML = 'EXITIUM / 대규모 사망 위험 <span>02 FILES</span>';
      var rex = document.createElement('div');
      rex.className = 'unit';
      rex.innerHTML = '<div class="unit-head">REX / 관리 불가 <span>01 FILE</span></div><div class="records"></div>';
      rex.querySelector('.records').appendChild(rows[2]);
      exitium.after(rex);
    }
    var entityDetails = {
      'arca-t-112': ['112', 'ARCA-T-112 / TUTUS', '주변 유기체의 자연 치유를 가속한다. 간혹 움직이나 느리고 위협 요소가 없어 별도의 관리가 필요하지 않다.'],
      'arca-t-078': ['078', 'ARCA-T-078 / TUTUS', '식물의 성장을 가속시키는 개체. 다른 개체에 비해 비교적 온순하며 전투 능력은 일반적인 성인 여성과 같음. 별도의 관리는 불필요하지만 개체의 자발적인 협조를 위해 식물을 다치게 하거나 하는 행위는 피할 것.'],
      'arca-c-073': ['073', 'ARCA-C-073 / CUSTODIA', '들은 목소리를 복제해 사람을 유인한다. 전투 능력은 약하나 목소리 자체에 변칙성이 있다. 격리 중 개체의 목소리를 듣는 것을 자제할 것.'],
      'arca-c-132': ['132', 'ARCA-C-132 / CUSTODIA', '사슬을 생성 및 조종하는 개체. 살생보다는 구속에 목적을 둔 능력이기에 두 명 이상의 인원일 시 쉽게 제압 가능. 자발적으로 격리되어 있지만 001 관련 사항엔 민감한 반응을 보이니 격리 시 001 관련 사항에 대한 발설을 주의할 것. 001의 호위 개체 중 하나로 추정.'],
      'arca-v-143': ['143', 'ARCA-V-143 / VINCULUM', "중세 판타지에나 나올 법한 '검기'라는 것을 다루는 개체. 검기 외에도 기본적인 신체 능력이 뛰어나 제압 시 최소 한 분대 단위로 움직일 것. 인간 자체를 증오하지는 않지만 자신의 판단하에 악하다고 생각되는 상대가 있다면 적대하니 해당 개체 앞에선 언행을 주의할 것."],
      'arca-v-122': ['122', 'ARCA-V-122 / VINCULUM', "공간을 찢어 자신이 기억하는 장소로 이동할 수 있는 개체. 신체 능력 자체는 낮으나 마땅한 제압 방안이 없고 인간을 크게 적대하지 않으니 가능한 그의 '심심함'이 나오지 않도록 주기적으로 '재미'를 제공할 것."],
      'arca-e-012': ['012', 'ARCA-E-012 / EXITIUM', '범위 내 사람들의 정신에 침투해 강제로 자신의 신도로 만드는 개체. 근처에 가기만 해도 신도화가 진행되니 제압 시 최대한 거리를 두고 제압할 것. 격리 실패 시 큰 피해가 예상되니 가능한 개체를 자극하지 말고 안전 거리를 확보한 채 연구할 것.'],
      'arca-e-048': ['048', 'ARCA-E-048 / EXITIUM', '연주를 통해 자신의 음상을 구현하는 개체. 악기가 없으면 능력이 반감되기는 하지만 노래만으로도 큰 피해를 줄 수 있는 개체이니만큼 주기적인 악기 제공으로 스트레스 조절 필요. 연주 자체에 사람을 홀리는 힘이 담겨있어 격리 시 소음 차단 필요.'],
      'arca-r-001': ['001', 'ARCA-R-001 / REX', '다양한 개체 생성 능력을 가졌으며 추가 능력이 존재할 수 있다. 전투 능력은 없으나 단단한 표피와 상주 호위 개체가 있다. 현재 미격리 상태이며 정확한 형상도 알 수 없다.']
    };
    anomaly.querySelectorAll('.record').forEach(function (record) {
      var key = record.querySelector('img').alt.toLowerCase();
      if (!entityDetails[key]) return;
      var item = entityDetails[key];
      record.querySelector('h4').textContent = item[0];
      record.querySelector('small').textContent = item[1];
      record.querySelector('p').textContent = item[2];
    });
  }

  var personnel = {
    representative: [
      ['arceria', '아르세리아', 'ARCA 기지 대표 / 32세', 'ARCA 기지의 대표. ███ - 정보 검열됨, 열람 불가'],
      ['kyle', '카일', '대표 수행원 / 27세', '아르세리아 대표의 수행원. 수행원 시험을 수석 합격한 영재... 이지만 이하 생략']
    ],
    retrieval: [
      ['ryan', '라이언', '개체 확보부 리더 / 37세', '15년 근속. 미친 개들을 조련하는 훌륭한 조련사.'],
      ['blair', '블레어', '개체 확보부 최전방 대원 / 28세', '신체 능력 출중, 다만 몸을 못 사려 부상 잦음'],
      ['clair', '클레어', '개체 확보부 중반 보조 대원 / 30세', '....어쩌면 개체 확보부의 유일한 정상인'],
      ['evan', '에반', '개체 확보부 최후방 지원 대원 / 24세', '공포에 취약하지만 지원 능력이 출중하다.']
    ],
    response: [
      ['celine', '셀린', '특수 대응부 리더 / 42세', '사고 가속 능력을 가진 책임감 강한 리더. ...대표님에게 조금만 더 순종적이었으면'],
      ['rogan', '로건', '특수 대응부 최전방 대원 / 44세', '근력 강화 능력을 가진 아저씨... 대원'],
      ['jaden', '제이든', '특수 대응부 중반 보조 대원 / 28세', '사슬을 이용한 구속 능력 보유. 현재 격리 중인 132와 계약 상태다.'],
      ['iris', '아이리스', '특수 대응부 최후방 의료 대원 / 26세', '██ - 검열된 능력 보유.']
    ],
    research: [
      ['eden', '에덴', '과학부 / 나이는 비밀!', '과학부의 스타⭐이자 깜찍 발랄한 천재! 무려 무려 세계 최고의 천재라고! █.█..██에덴님 보안█ 멋█로 뚫으█면 안 됩니다.'],
      ['bella', '벨라', '과학부 연구원 / 32세', '개체 능력 및 제압 관련 연구 중심 연구원. 대부분의 연구를 강압적으로 진행한다.'],
      ['nathan', '네이선', '과학부 연구원 / 32세', '개체 능력 및 제압 관련 연구 중심 연구원. 강제성보다 개체와의 대화를 우선시한다.'],
      ['lily', '릴리', '과학부 연구원 / 29세', '개체의 자원 생산 연구 중심 연구원. ...어쩌면 과학부의 유일한 정상인']
    ],
    medical: [
      ['rachel', '레이첼', '의료부 의료부장 / 30세', '의료 능력만으로 의료부장을 단 수석 중의 수석. 욕만 조금 줄이셨으면.'],
      ['anna', '안나', '의료부 간호사 / 26세', '의료부장의 폭주를 막을 수 있는 어쩌면 유일한 사람.']
    ],
    accounting: [
      ['martin', '마틴', '회계부 팀장 / 33세', '...불쌍한 일반인. 후임을 잘 만났더라면...'],
      ['sophie', '소피', '회계부 사무원 / 25세', '...왜 안 잘리지']
    ]
  };
  var overview = document.getElementById('overview');
  if (overview) {
    overview.querySelector('h3').textContent = 'Overview';
    overview.querySelector('.description').textContent = 'ARCA는 지상과 분리된 지하 거대 연구소이자 피난처다. 생존 인력을 보호하고, 개체를 격리 및 연구하며, Project ARCHE의 목표를 수행한다.';
  }

  var systemFolder = Array.prototype.slice.call(document.querySelectorAll('.folder')).filter(function (folder) {
    return folder.querySelector('.folder-button') && folder.querySelector('.folder-button').textContent.indexOf('SYSTEM RECORDS') >= 0;
  })[0];
  if (systemFolder && !document.getElementById('unresricted-project-link')) {
    var projectLink = document.createElement('a');
    projectLink.href = '#';
    projectLink.id = 'unresricted-project-link';
    projectLink.textContent = 'Unresricted Project';
    systemFolder.querySelector('.folder-items').appendChild(projectLink);
    projectLink.addEventListener('click', function (event) {
      event.preventDefault();
      var old = document.getElementById('unresricted-prompt');
      if (old) old.remove();
      var prompt = document.createElement('div');
      prompt.id = 'unresricted-prompt';
      prompt.style.cssText = 'position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:20px;background:rgba(0,0,0,.86)';
      prompt.innerHTML = '<div style="width:min(480px,100%);position:relative;border:1px solid #7ce0d6;background:#061217;padding:28px;color:#e7f0ed;font-family:Arial,sans-serif"><button type="button" style="position:absolute;right:12px;top:12px;width:34px;height:34px;border:1px solid #e7f0ed;background:#061217;color:#e7f0ed;font-size:18px">x</button><div style="color:#7ce0d6;font:11px monospace;letter-spacing:.1em">UNRESRICTED PROJECT / ACCESS REQUEST</div><label style="display:block;margin-top:26px;font:20px Arial">Who are you?<input type="text" autocomplete="off" autofocus style="display:block;width:100%;margin-top:12px;padding:14px;border:1px solid #19343c;background:#02080b;color:#e7f0ed;font:15px Arial;outline:none"></label><pre style="min-height:64px;margin:18px 0 0;color:#7ce0d6;white-space:pre-wrap;font:12px/1.55 monospace"></pre></div>';
      prompt.querySelector('button').addEventListener('click', function () { prompt.remove(); });
      prompt.addEventListener('click', function (clickEvent) { if (clickEvent.target === prompt) prompt.remove(); });
      document.body.appendChild(prompt);
      var answer = prompt.querySelector('input');
      var output = prompt.querySelector('pre');
      answer.focus();
      answer.addEventListener('keydown', function (keyEvent) {
        if (keyEvent.key !== 'Enter') return;
        var value = answer.value.trim().toLowerCase();
        answer.disabled = true;
        prompt.remove();
        if (value !== 'noah') {
          var warning = document.createElement('div');
          warning.style.cssText = 'position:fixed;inset:0;z-index:100000;display:grid;place-items:center;background:rgba(0,0,0,.88)';
          warning.innerHTML = '<div style="border:1px solid #ed7069;background:#16090b;color:#ed7069;padding:32px 42px;font:20px monospace;box-shadow:0 20px 70px #000;text-shadow:2px 0 #ffb0a8,-2px 0 #6d0000">WARNING<br><br>You are not ███</div>';
          document.body.appendChild(warning);
          var noiseBox = warning.querySelector('div');
          var noiseTimer;
          setTimeout(function () {
            noiseBox.style.background = 'repeating-linear-gradient(0deg,#16090b 0 4px,#3e1015 4px 7px,#090304 7px 10px)';
            noiseBox.style.backgroundSize = '100% 10px';
            noiseTimer = setInterval(function () {
              noiseBox.style.backgroundPosition = '0 ' + (Math.floor(Math.random() * 10) - 5) + 'px';
              noiseBox.style.opacity = String(0.72 + Math.random() * 0.28);
            }, 55);
          }, 1000);
          setTimeout(function () { if (noiseTimer) clearInterval(noiseTimer); warning.remove(); }, 2000);
          return;
        }
        var codeWindow = document.createElement('div');
        codeWindow.style.cssText = 'position:fixed;inset:0;z-index:100000;display:grid;place-items:center;padding:20px;background:rgba(0,0,0,.88)';
        codeWindow.innerHTML = '<div style="width:min(900px,100%);min-height:560px;position:relative;border:1px solid #7ce0d6;background:#02080b;color:#e7f0ed;padding:26px;font:12px/1.55 monospace;overflow:hidden"><button type="button" style="position:absolute;right:12px;top:12px;background:#02080b;color:#e7f0ed;border:1px solid #e7f0ed;width:30px;height:30px">x</button><div>UNRESRICTED PROJECT / DECRYPTION STREAM</div><pre style="height:405px;overflow:hidden;white-space:pre;margin:22px 0 0"></pre></div>';
        document.body.appendChild(codeWindow);
        codeWindow.querySelector('button').addEventListener('click', function () { codeWindow.remove(); });
        var stream = codeWindow.querySelector('pre');
        var codes = ['0x4E4F4148::01100110::AC-07-19-FE::ARCHIVE-LINK::4B-92-0D-7711::MEMORY-SEGMENT', 'ARCA-ROOT//7F-19-AC-6D-00::ENTITY-LOCK::01-9F-B2-EE-77::SECURITY-PROTOCOL', 'MEMORY_LINK::ACCEPTED::00F1-9A7C-4D2E-77B0::NEURAL-TRACE::CIPHER-STREAM-ALPHA', 'PROJECT_STATUS::ACTIVE::44-44-4E-0C-91-7F::SUBJECT-INDEX::NO-ACCESS-REQUIRED', 'ENTITY-LOCK::01-9F-B2-EE-77-14::CONTAINMENT-GRID::RUNNING::HASH-0000-FFFF', 'ARCHIVE-SHARD::444E-0A-77-1D-99::SURVIVAL-PROTOCOL::SIGNAL-RECEIVED'];
        var index = 0;
        var codeTimer = setInterval(function () {
          stream.textContent += codes[index % codes.length] + '\n';
          index += 1;
          stream.scrollTop = stream.scrollHeight;
        }, 45);
        setTimeout(function () {
          clearInterval(codeTimer);
          setTimeout(function () {
            var finalMessage = document.createElement('div');
            finalMessage.textContent = 'Humanity must survive';
            finalMessage.style.cssText = 'position:absolute;left:26px;right:26px;bottom:25px;color:#7ce0d6;text-align:center;font:700 31px/1.2 Arial,sans-serif;letter-spacing:.04em;text-shadow:0 0 18px #7ce0d688';
            codeWindow.querySelector('div').appendChild(finalMessage);
            setTimeout(function () { codeWindow.remove(); }, 1000);
            stream.style.overflowY = 'auto';
            stream.scrollTop = stream.scrollHeight;
          }, 1000);
        }, 3000);
      });
    });
  }

  if (anomaly) {
    var classNotes = {
      'TUTUS': '안정적으로 관리 가능한 개체. 별도의 감시나 강화 격리가 불필요한 경우가 많다.',
      'CUSTODIA': '지속적인 감시가 필요한 개체. 능력과 행동을 정기적으로 관찰해야 한다.',
      'VINCULUM': '강력한 격리가 필요한 개체. 고위험 능력을 보유해 강화된 제압 절차가 요구된다.',
      'EXITIUM': '대규모 사망 위험이 있는 개체. 자극을 피하고 엄격한 안전 거리를 유지해야 한다.',
      'REX': '관리 불가 등급. 멸망의 근원과 연관된 것으로 추정되며 접근 및 교섭이 금지된다.'
    };
    anomaly.querySelectorAll('.unit').forEach(function (unit) {
      var head = unit.querySelector('.unit-head');
      var label = head.textContent;
      var key = Object.keys(classNotes).filter(function (name) { return label.indexOf(name) >= 0; })[0];
      if (!key || unit.querySelector('.class-note')) return;
      var note = document.createElement('p');
      note.className = 'class-note';
      note.textContent = classNotes[key];
      note.style.cssText = 'margin:0;padding:12px 18px;border-bottom:1px solid #19343c;color:#9aafb0;font-size:12px;line-height:1.7;background:#041014';
      head.after(note);
    });
  }

  Object.keys(personnel).forEach(function (sectionId) {
    var section = document.getElementById(sectionId);
    if (!section) return;
    var records = section.querySelectorAll('.record');
    personnel[sectionId].forEach(function (entry, index) {
      setRecord(records[index], entry[0], entry[1], entry[2], entry[3]);
    });
  });
})();
