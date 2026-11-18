# Arnaut LTDA - Documento de Reposicionamento Estrategico v2

> **Contexto de negocios (entendimento correto):**
> - **Arnaut LTDA** = marca guarda-chuva / futura holding de multiplos produtos de tecnologia
> - **The Agency** = primeiro produto da Arnaut. Uma plataforma "business-in-a-box" que permite a qualquer pessoa operar sua propria agencia de desenvolvimento de software sem conhecimento tecnico, usando agentes autonomos de IA
> - **Cliente da Arnaut** = empreendedor que quer ter seu proprio negocio de tecnologia
> - **Cliente do cliente** = PMEs locais (barbearias, clinicas, oficinas, etc.) que recebem o software final
>
> **Objetivo deste documento:** Briefing completo para outra IA reescrever a landing page, eliminando linguagem de "software house/consultoria prestadora de servico" e enquadrando a Arnaut como startup de produto escalavel compativel com Google for Startups, Claude for Startups, AWS Activate e Microsoft Founders Hub.

---

## 1. DIAGNOSTICO: Por Que a Landing Page Atual Reprova

A landing page atual posiciona a Arnaut LTDA como se **ela mesma fosse a software house** que atende clientes finais. Toda a linguagem e de prestacao de servico: "Solicitar proposta", "Modalidade de contratacao", "NDA bilateral", "Engenharia responsavel: Arnaut LTDA". Para um avaliador de programa de aceleracao, isso e uma **agencia/consultoria vendendo horas de engenharia**, nao uma startup com produto proprio.

O problema nao e o The Agency em si — o produto e forte. O problema e que a landing page nao comunica que **The Agency e um produto que a Arnaut vende** para outros empreendedores operarem. A pagina faz parecer que a Arnaut e a operadora direta dos servicos.

### 1.1 Tabela de Reprovacao por Programa

| Programa | Criterio-chave que reprova | O que a LP atual mostra |
|---|---|---|
| **Microsoft Founders Hub** | "Consultancies, agencies, or companies solely providing services without a core software product do not qualify" | "Arnaut LTDA - Software House", "Solicitar proposta", formulario de contratacao de servico |
| **Google for Startups** | "Building a scalable product with significant TAM and defensible growth model" | Foco em infraestrutura interna (mTLS, Docker, RabbitMQ) sem mostrar o produto nem o mercado |
| **Claude for Startups** | "What you are building, how you use AI" | Nao fica claro que existe um produto; parece que a Arnaut apenas faz projetos sob demanda |
| **AWS Activate** | "Fully functioning company website" associado a um produto | Parece portfolio tecnico de engenharia, nao site de produto |

### 1.2 Termos Que Devem Ser Eliminados

| Termo toxico | Por que reprova | Onde aparece |
|---|---|---|
| "Software House" | Classificacao direta como prestadora de servico | Hero badge, Hero h1, Footer |
| "Solicitar proposta" | Linguagem de consultoria/agencia B2B | Hero CTA, AgencyEngine, Lifecycle, FAQ, Contact, Footer |
| "Modalidade de contratacao" | Formulario de venda de servico sob demanda | ContactSection select |
| "NDA bilateral" | Posicionamento de prestador de servico terceirizado | ContactSection guarantee card |
| "Engenharia responsavel: Arnaut LTDA" | Terceirizacao explicita | ContactSection footer |
| "Escopo tecnico do projeto" | Linguagem de proposta comercial customizada | ContactSection form |
| "Stack tecnologica prioritaria" | Formulario de briefing de projeto de consultoria | ContactSection form |
| "PoC de Automacao e Validacao" | Oferta de servico consultivo | ContactSection select option |
| "Auditoria de Seguranca e Debito Tecnico" | Oferta de servico consultivo | ContactSection select option |

---

## 2. NOVO POSICIONAMENTO

### 2.1 O Que a Arnaut LTDA Realmente E

```
ARNAUT LTDA
  |
  |-- Marca guarda-chuva / holding de produtos de tecnologia
  |
  |-- Produto 1: THE AGENCY
  |     |
  |     |-- Plataforma "business-in-a-box" AI-native
  |     |-- Permite a qualquer pessoa operar sua propria
  |     |   agencia de desenvolvimento de software
  |     |-- Sem necessidade de conhecimento tecnico
  |     |-- Agentes autonomos de IA fazem todo o trabalho:
  |     |   prospeccao, prototipacao, desenvolvimento,
  |     |   testes, seguranca, deploy e suporte
  |     |-- O comprador e o "dono da agencia"
  |     |-- Os clientes da agencia sao PMEs locais
  |
  |-- Produto 2: (futuro)
  |-- Produto N: (futuro)
```

### 2.2 Elevator Pitch (1 paragrafo)

> A **Arnaut LTDA** cria produtos de tecnologia que democratizam o acesso a negocios digitais. Nosso primeiro produto, **The Agency**, e uma plataforma completa que permite a qualquer empreendedor operar sua propria agencia de desenvolvimento de software — sem precisar saber programar. A plataforma usa agentes autonomos de IA para prospectar clientes, criar prototipos personalizados, desenvolver software de producao com arquitetura limpa e seguranca auditada, e entregar o produto final ao cliente do operador. O empreendedor controla tudo via um cockpit de comando enquanto a IA executa.

### 2.3 Categoria de Mercado

**O que a Arnaut NÃO e:**
- Software house (nao vende servicos de engenharia)
- Consultoria (nao faz projetos sob medida para terceiros)
- Agencia de desenvolvimento (nao e ela que atende clientes finais)

**O que a Arnaut E:**
- **Startup de produto** com plataforma AI-native propria
- Vende um produto replicavel e escalavel (The Agency) para N empreendedores
- Cada empreendedor que compra o produto opera seu proprio negocio independente
- Modelo analogo: **Shopify** (plataforma que permite a qualquer pessoa ter sua propria loja) mas para **agencias de software**

### 2.4 Por que esse posicionamento passa nos programas

| Fator | Narrativa |
|---|---|
| **Produto proprio** | The Agency e propriedade intelectual da Arnaut LTDA, nao servico sob demanda |
| **Escalabilidade** | Cada unidade vendida opera de forma independente; a Arnaut escala vendendo mais unidades, nao contratando mais engenheiros |
| **TAM massivo** | Milhoes de empreendedores no Brasil querem ter negocio de tecnologia mas nao sabem programar |
| **AI como core** | Agentes autonomos sao o produto, nao feature acessoria |
| **Unit economics** | Custo marginal proximo a zero por unidade; margens superiores a 90% |
| **Defensibilidade** | Pipeline verticalizado de agentes (OSINT + prototipacao + codegen + QA + security + deploy) dificil de replicar |
| **Visao de holding** | The Agency e o primeiro produto; a marca Arnaut comporta expansao para outros verticais |

---

## 3. ESTRUTURA DA NOVA LANDING PAGE

### 3.1 Hierarquia de Secoes

```
1. HERO — O que a Arnaut faz + The Agency como produto destaque
2. O PROBLEMA — Por que empreendedores nao conseguem entrar no mercado de tecnologia
3. O PRODUTO — The Agency: o que e, para quem, o que inclui
4. COMO FUNCIONA — Jornada do empreendedor que compra The Agency
5. POR DENTRO — Tecnologia e agentes que sustentam o produto
6. NUMEROS — Metricas, TAM, unit economics
7. PLANOS — Como adquirir The Agency
8. FAQ — Perguntas de empreendedor/investidor, nao de engenheiro
9. CTA FINAL — Comece seu negocio de tecnologia
10. FOOTER — Arnaut LTDA como marca de produtos
```

### 3.2 Conteudo Detalhado por Secao

---

#### SECAO 1: HERO

**Badge/pill (onde hoje diz "Arnaut LTDA · Software House"):**
```
Arnaut LTDA · Produtos de Tecnologia
```

**Sub-badge (onde hoje diz "The Agency em produção"):**
```
The Agency -- nosso primeiro produto
```

**Headline principal:**
```
Tenha sua propria agencia de software.
Sem saber programar.
```

**Sub-headline:**
```
The Agency e uma plataforma completa que usa inteligencia artificial 
para prospectar clientes, criar prototipos e entregar software de 
producao. Voce controla o negocio. A IA faz o trabalho tecnico.
```

**Hard fact:**
```
Sao Paulo, SP · Plataforma com 10 microsservicos autonomos,
31 suites de teste e esteira de engenharia completa em producao
```

**CTAs:**
- Primario: `Entrar na lista de espera` ou `Garantir meu acesso`
- Secundario: `Ver como funciona`

**Visual do Hero (terminal):**
Manter a estetica do terminal, mas reenquadrar o conteudo. Em vez de mostrar servicos internos de DevOps, mostrar a **perspectiva do empreendedor operando sua agencia**:

```
Servicos sugeridos (sidebar do terminal):
- "Prospeccao de Leads"      (status: Ativo) - "12 leads qualificados no pipeline"
- "Prototipacao Automatica"  (status: Ativo) - "Demo gerada para Barbearia Premium"  
- "Desenvolvimento & Deploy" (status: Ativo) - "Sistema de agendamento entregue"

Logs do terminal:
$ the-agency status --pipeline
  ✓ 12 leads minerados no Google Maps (nicho: barbearias, Sao Paulo)
  ✓ 3 demos bespoke publicadas na Vercel com identidade do cliente
  ✓ 2 negocios fechados com sinal PIX confirmado
  [LIVE] Faturamento da semana: R$ 3.200,00 | Margem liquida: 94%
```

> [!IMPORTANT]
> A mudanca critica aqui e que o terminal mostra o **negocio do empreendedor funcionando** (leads, demos, vendas, faturamento), nao a infraestrutura interna (mTLS, AMQP, containers). O empreendedor que ve isso pensa "eu quero isso pra mim", nao "que infra complexa".

---

#### SECAO 2: O PROBLEMA

**Titulo:**
```
Ter um negocio de tecnologia hoje exige o que a maioria nao tem.
Conhecimento tecnico, equipe e capital.
```

**3 colunas de dor (perspectiva do EMPREENDEDOR que quer entrar no mercado):**

| Coluna 1 | Coluna 2 | Coluna 3 |
|---|---|---|
| **Montar uma agencia tradicional** | **Usar plataformas no-code** | **Revender SaaS generico** |
| Precisa de desenvolvedores (R$ 8.000+/mes cada), designers, PMs e meses para entregar o primeiro projeto | Ferramentas limitadas que geram sites estaticos sem logica de negocio, banco de dados ou integracoes reais | Voce vira revendedor de software que nao e seu, com margens baixas e zero diferenciacao |
| Risco financeiro altissimo antes de qualquer faturamento | Resultados amadores que nao sustentam um negocio profissional | Clientes presos em plataformas alheias; nenhum IP proprio |

**Frase de transicao:**
```
E se voce pudesse operar uma agencia de software profissional
sem contratar nenhum programador e sem saber escrever uma linha
de codigo? Com The Agency, voce pode.
```

---

#### SECAO 3: O PRODUTO — THE AGENCY

**Titulo:**
```
The Agency: sua agencia de software, operada por inteligencia artificial.
Voce e o dono. A IA e a equipe.
```

**Descricao curta:**
```
The Agency e uma plataforma standalone que transforma qualquer
empreendedor no dono de uma agencia de desenvolvimento de software
completa. Agentes autonomos de IA prospectam clientes, criam
prototipos sob medida, desenvolvem o software, testam, auditam a
seguranca e entregam o produto final. Voce controla tudo via um
cockpit visual e fatura sem precisar de equipe tecnica.
```

**4 pilares do produto (substituindo os 4 pilares DevOps atuais):**

**Pilar 1: Prospeccao Automatica de Clientes**
- Titulo: "Clientes encontrados pela IA, nao por voce"
- A plataforma minera o Google Maps, identifica negocios locais com dores reais e valida numeros de WhatsApp ativos
- Voce recebe leads qualificados prontos para abordagem, sem prospectar manualmente

**Pilar 2: Prototipo Pronto Antes da Venda**
- Titulo: "Venda mostrando o produto pronto, nao uma proposta"
- A IA cria um prototipo funcional com a identidade visual, fotos e catalogo real do cliente
- O lead ve seu proprio sistema funcionando antes de dizer sim -- taxa de conversao incomparavel

**Pilar 3: Fabrica de Software Autonoma**
- Titulo: "Codigo de qualidade corporativa sem programador"
- Agentes especializados projetam a arquitetura em TypeScript/Next.js, codificam, executam testes (80%+ cobertura) e realizam auditoria de seguranca com 5 motores
- Voce entrega software profissional sem escrever uma linha de codigo

**Pilar 4: Cockpit de Comando**
- Titulo: "Seu negocio inteiro em uma unica tela"
- Dashboard visual com kanban de leads, copilot de WhatsApp, telemetria financeira e mesa de diretores de IA
- Voce controla a operacao, aprova decisoes e acompanha o faturamento em tempo real

**Visuais dos pilares:**
- Pilar 1: mockup de lista de leads com score de qualificacao, dados do Google Maps, nota e numero de avaliacoes
- Pilar 2: screenshot de um prototipo gerado (ex: "Sistema de Agendamento - Barbearia Premium") com a marca do cliente
- Pilar 3: checklist de qualidade (testes aprovados, 0 vulnerabilidades, cobertura 85%, deploy concluido)
- Pilar 4: mockup do cockpit com kanban, saldo em caixa e chat de WhatsApp com copilot de IA

---

#### SECAO 4: COMO FUNCIONA

**Titulo:**
```
De zero a sua agencia de software em tres etapas.
```

**Etapa 1: Configure sua agencia**
```
Titulo: "Instale e configure em minutos"
Desc: "The Agency roda como uma aplicacao standalone no seu ambiente.
Configure seus nichos-alvo, regiao de atuacao e parametros de
precificacao. A plataforma conecta automaticamente ao WhatsApp,
gateway de pagamento e servicos de deploy."
```
Visual: tela de setup com campos de nicho, regiao, faixas de preco

**Etapa 2: A IA prospecta, prototipa e vende**
```
Titulo: "Leads, demos e vendas no piloto automatico"
Desc: "Agentes autonomos mineraram leads qualificados, constroem
prototipos personalizados e abordam clientes no WhatsApp com
o sistema deles ja pronto. Voce aprova cada etapa no cockpit
com um clique."
```
Visual: pipeline de um lead passando de "minerado" > "demo pronta" > "negociando" > "fechado (R$ 1.200)"

**Etapa 3: Software entregue, voce fatura**
```
Titulo: "Produto profissional entregue, dinheiro no seu caixa"
Desc: "A fabrica autonoma de software constroi o sistema final com
arquitetura limpa, testes e seguranca auditada. O cliente recebe
o codigo-fonte no GitHub. Voce recebe o pagamento via PIX e ativa
o plano mensal de suporte."
```
Visual: resumo financeiro -- "Setup: R$ 1.200 recebido | MRR: R$ 197/mes ativado | Margem: 94%"

---

#### SECAO 5: POR DENTRO (Tecnologia)

**Titulo:**
```
Tecnologia de ponta por dentro.
Simplicidade por fora.
```

**Subtitulo:**
```
Voce nao precisa entender nada disso -- a plataforma cuida de tudo.
Mas para quem quer saber, aqui esta o que alimenta o The Agency.
```

Manter o diagrama hub-and-spoke visual existente, mas reenquadrar os nodes como os **modulos do produto The Agency**:

| Node Atual | Substituir por | Descricao |
|---|---|---|
| Postgres | Base de Dados | Dados de leads, clientes e projetos |
| Redis | Motor de IA | Orquestracao de agentes autonomos |
| Kafka | Mensageria | Comunicacao automatizada via WhatsApp |
| Stripe | Pagamentos PIX | Cobranca integrada via Banco Inter |
| Sentry | Seguranca | 5 camadas de auditoria automatizada |
| Grafana | Cockpit | Dashboard de controle do seu negocio |

Centro do hub: **The Agency** (em vez de "API")

---

#### SECAO 6: NUMEROS

> [!IMPORTANT]
> O produto esta em fase de MVP, sem traction de receita ou usuarios. Esta secao deve focar em **oportunidade de mercado**, **prova tecnica** e **unit economics projetados** — que e o que aceleradoras esperam de startups pre-traction. Nao inventar numeros de usuarios ou receita.

**Titulo:**
```
A oportunidade. A tecnologia. Os numeros.
```

**Bloco 1 — Oportunidade de Mercado:**
- 15M+ micro e pequenas empresas no Brasil sem presenca digital transacional
- Milhoes de empreendedores procurando negocios digitais de baixo investimento
- Mercado de ferramentas de IA para desenvolvedores cresce 40%+ ao ano
- Custo de uma agencia de software tradicional: equipe minima de R$ 25.000+/mes em folha

**Bloco 2 — Unit Economics Projetados (por projeto que o operador entrega):**

> [!NOTE]
> Estes sao dados projetados com base na arquitetura do MVP, nao metricas de operacao real. Apresentar como "projecao" ou "estimativa validada em MVP".

```
RECEITA MEDIA PROJETADA POR PROJETO:                    R$ 1.200,00
-------------------------------------------------------------------
Custos marginais estimados por projeto:
  Tokens de LLM (mineracao + prototipo + codegen + QA):    - R$  4,80
  Transcricao de audio (Whisper Groq):                     - R$  0,20
  Emissao PIX (Banco Inter):                               - R$  0,00
  Hosting staging (Vercel):                                - R$  1,50
  Embeddings e busca vetorial (local):                     - R$  0,00
-------------------------------------------------------------------
MARGEM BRUTA PROJETADA:                                       >99%

+ RECEITA RECORRENTE PROJETADA: R$ 97 a R$ 297/mes por cliente ativo (MRR)
```

**Bloco 3 — MVP Tecnico Comprovado (onde estamos hoje):**
- Fase atual: **MVP em desenvolvimento ativo**
- 10 microsservicos em producao no ambiente de desenvolvimento
- 31 suites de testes automatizados (100% PASS)
- 80%+ de cobertura de codigo obrigatoria
- 5 motores de seguranca integrados (Semgrep, Gitleaks, Trivy, SonarQube, Nuclei)
- Arquitetura polyglot: Python Core + Node.js WhatsApp + Next.js Cockpit
- Lista de espera aberta para early adopters

---

#### SECAO 7: EARLY ACCESS (Substituindo Planos/Pricing)

> [!IMPORTANT]
> O produto esta em fase de MVP. Nao ha pricing publico. A secao de planos deve ser substituida por uma secao de **lista de espera / early access** que gere leads qualificados e demonstre demanda para os programas de aceleracao.

**Titulo:**
```
Estamos construindo o futuro das agencias de software.
Garanta seu lugar.
```

**Subtitulo:**
```
The Agency esta em fase de acesso antecipado. Cadastre-se na lista 
de espera para ser um dos primeiros operadores e receber condicoes 
exclusivas de lancamento.
```

**O que o early adopter recebe:**
- Acesso prioritario ao MVP antes do lancamento publico
- Pricing de fundador (condicoes especiais permanentes)
- Canal direto com a equipe de produto
- Participacao ativa no roadmap de funcionalidades

**Dois modelos disponíveis no lancamento:**
- **Self-Hosted**: instale e opere no seu proprio servidor, controle total da infra e dos dados
- **Managed**: a Arnaut hospeda e opera a infra, voce foca 100% no negocio

**Formulario de waitlist:**
- Nome
- E-mail
- "Qual sua experiencia com tecnologia?" (select: Nenhuma / Basica / Intermediaria / Avancada)
- "O que te interessa no The Agency?" (texto livre, curto)

**CTA:** `Entrar na lista de espera` ou `Garantir meu acesso`

> [!IMPORTANT]
> Waitlists sao sinais de demanda que aceleradoras valorizam. Mesmo sem traction de receita, uma lista de espera com N inscritos demonstra product-market fit potencial. Implementar com endpoint real que armazene os cadastros para poder reportar numeros aos programas.

---

#### SECAO 8: FAQ

**P1: O que e o The Agency?**
> R: The Agency e um produto da Arnaut LTDA -- uma plataforma standalone que permite a qualquer empreendedor operar sua propria agencia de desenvolvimento de software. Agentes autonomos de IA cuidam de todo o processo tecnico: prospeccao de clientes, prototipacao, desenvolvimento, testes, seguranca e deploy. Voce controla o negocio pelo cockpit e fatura sem precisar de equipe tecnica.

**P2: Preciso saber programar para usar?**
> R: Nao. The Agency foi projetado para empreendedores sem conhecimento tecnico. A IA cuida de toda a engenharia. Voce interage com o sistema via cockpit visual: aprova leads, revisa demos, acompanha projetos e controla o financeiro.

**P3: Que tipo de software minha agencia vai entregar?**
> R: Sistemas digitais sob medida para negocios locais: agendamento online, vitrines digitais com PIX, catalogos interativos, portais de autoatendimento e mini-ERPs. Cada produto e construido com a identidade visual do cliente final.

**P4: O codigo entregue ao meu cliente e de qualidade?**
> R: Sim. Todo software gerado pela plataforma segue Clean Architecture em TypeScript/Next.js, com tipagem estrita, testes automatizados (80%+ de cobertura via Playwright), e auditoria de seguranca com 5 motores (Semgrep, Gitleaks, Trivy, SonarQube e Nuclei). O cliente final recebe o repositorio Git completo, sem vendor lock-in.

**P5: Quanto custa e como consigo acesso?**
> R: The Agency esta em fase de acesso antecipado. Cadastre-se na lista de espera para garantir condicoes exclusivas de lancamento. Quando sua agencia estiver operando, cada projeto entregue gera entre R$ 450 e R$ 2.500 de setup mais receita recorrente mensal, com custos operacionais inferiores a R$ 10 por projeto. Oferecemos dois modelos: self-hosted (voce controla a infra) e managed (a Arnaut cuida de tudo).

**P6: A Arnaut LTDA e so o The Agency?**
> R: Nao. A Arnaut LTDA e uma empresa de produtos de tecnologia. The Agency e nosso primeiro produto. Estamos construindo uma plataforma de ferramentas que democratizam o acesso a negocios digitais.

---

#### SECAO 9: CTA FINAL

**Titulo:**
```
Seu negocio de tecnologia comeca aqui.
Sem codigo. Sem equipe. Sem complicacao.
```

**CTA:** `Entrar na lista de espera` ou `Garantir meu acesso`

---

#### SECAO 10: FOOTER

**Descricao da empresa (substituir "Software house brasileira..."):**
```
Arnaut LTDA -- Produtos de tecnologia que democratizam negocios digitais. Sao Paulo, Brasil.
```

**Links de navegacao:**
- "The Agency" -> manter (agora e nome do produto, nao da empresa)
- "Pilares de Segurança" -> "O Produto"
- "Ciclo Autônomo" -> "Como Funciona"
- "Tecnologias" -> "Tecnologia"
- "Perguntas" -> manter

---

## 4. CHECKLIST DE CONFORMIDADE COM OS PROGRAMAS

### 4.1 Google for Startups

| Requisito | Como a nova LP atende |
|---|---|
| Startup Seed a Series A construindo produto escalavel | Arnaut LTDA fundada em 2026, produto The Agency em producao, escalavel via venda de licencas/assinaturas |
| TAM significativo | Milhoes de empreendedores + 15M PMEs como mercado secundario |
| Foco em AI/ML | AI-native: agentes autonomos sao o core do produto |
| Modelo de crescimento defensavel | Pipeline verticalizado de agentes dificil de replicar; network effects potenciais |

### 4.2 Microsoft Founders Hub

| Requisito | Como a nova LP atende |
|---|---|
| "Developing a software-based product that you own" | The Agency e produto proprio da Arnaut, com IP integral |
| "Consultancies, agencies do not qualify" | A Arnaut nao e agencia/consultoria; ela VENDE uma plataforma para outros serem agencias |
| Privada, com fins lucrativos, pre-Series C | Arnaut LTDA constituida formalmente, bootstrapped/pre-seed |
| Website associado a produto | LP inteira focada no produto The Agency, com pricing e demo |

### 4.3 Claude for Startups

| Requisito | Como a nova LP atende |
|---|---|
| Fundada nos ultimos 5 anos | 2026 |
| E-mail corporativo no dominio | contato@arnaut.dev.br |
| Descrever o que constroi e como usa IA | Agentes autonomos de IA sao o produto inteiro |
| Como apoio da Anthropic ajudaria | Reducao de custos de inferencia dos agentes que geram e auditam software |

### 4.4 AWS Activate

| Requisito | Como a nova LP atende |
|---|---|
| Fundada nos ultimos 10 anos | 2026 |
| Website funcional da empresa | arnaut.dev.br com produto claro |
| Conta AWS ativa | Requisito tecnico, independe da LP |

---

## 5. INVENTARIO DE MUDANCAS NOS COMPONENTES REACT

### 5.1 Componente por Componente

| Componente | Arquivo | Mudancas |
|---|---|---|
| **Navbar** | `src/components/Navbar.tsx` | Trocar link "The Agency" (manter nome, mas como link de produto). Trocar "Solicitar proposta" por "Comecar agora". Trocar "Pilares" por "Produto". Trocar "Ciclo" por "Como Funciona". |
| **Hero** | `src/components/Hero.tsx` | Reescrever badge ("Arnaut LTDA · Produtos de Tecnologia"), headline, sub-headline, hard fact e CTAs conforme Secao 3.2. Mudar dados do terminal para perspectiva do empreendedor (leads, demos, faturamento). |
| **AgencyEngine** | `src/components/AgencyEngine.tsx` | Reescrever h2 para apresentar The Agency como **produto**. Mudar descricao. Trocar dados do cockpit (pipeline de CI/CD -> pipeline de negocios do empreendedor). Manter estetica do pipeline board mas mudar conteudo. |
| **Pillars** | `src/components/Pillars.tsx` | Substituir 4 pilares DevOps por 4 pilares do produto (Prospeccao, Prototipo, Fabrica, Cockpit). Substituir visuais (mTLS toggles -> mockups de leads/demos/dashboard). |
| **Lifecycle** | `src/components/Lifecycle.tsx` | Reescrever 3 etapas como jornada do empreendedor (Configurar agencia -> IA prospecta e vende -> Software entregue e faturamento). Substituir visuais (BDD specs -> setup wizard, pipeline de lead, resumo financeiro). |
| **TechStack** | `src/components/TechStack.tsx` | Mudar labels dos nodes para modulos do produto. Mudar hub central de "API" para "The Agency". |
| **FAQ** | `src/components/FAQ.tsx` | Reescrever titulo e todas as perguntas com foco em empreendedor conforme Secao 3.2. Adicionar 2 perguntas (total: 6). |
| **ContactSection** | `src/components/ContactSection.tsx` | Transformar em formulario de **waitlist / early access**. Campos: Nome, E-mail, "Qual sua experiencia com tecnologia?" (select), "O que te interessa no The Agency?" (texto curto). CTA: "Entrar na lista de espera". Remover guarantee card com NDA/SLA. Substituir por card com beneficios do early access (acesso prioritario, pricing de fundador, canal direto, participacao no roadmap). Endpoint de envio deve armazenar leads da waitlist. |
| **Footer** | `src/components/Footer.tsx` | Trocar descricao "Software house brasileira..." por "Produtos de tecnologia que democratizam negocios digitais". Renomear links de navegacao. |
| **page.tsx** | `src/app/page.tsx` | Adicionar componente Metrics. Renomear componentes conforme necessario. Remover necessidade de Pricing.tsx (waitlist integrada no ContactSection). |

### 5.2 Novos Componentes

| Componente | Arquivo Sugerido | Conteudo |
|---|---|---|
| **Metrics** | `src/components/Metrics.tsx` | Oportunidade de mercado, unit economics projetados, prova tecnica do MVP |

> [!NOTE]
> Nao criar componente Pricing separado. A secao de early access/waitlist sera integrada no ContactSection reformulado. Quando houver pricing definido no futuro, criar Pricing.tsx nesse momento.

---

## 6. TOM DE VOZ E DIRETRIZES DE COPY

### 6.1 Tom Geral

- **Empoderador**: falar com o empreendedor como alguem que vai ter seu proprio negocio
- **Acessivel**: evitar jargao tecnico na primeira camada; detalhes tecnicos ficam em secoes secundarias
- **De produto**: linguagem de SaaS/plataforma, nao de servico/consultoria
- **Confiante mas nao arrogante**: demonstrar capacidade tecnica sem soar como portfolio de engenharia

### 6.2 Glossario de Substituicoes

| Nao usar | Usar |
|---|---|
| Software house | Produtos de tecnologia / Plataforma |
| Solicitar proposta | Comecar agora / Quero minha agencia |
| Modalidade de contratacao | Escolha seu plano |
| NDA bilateral | (remover da LP) |
| Escopo tecnico do projeto | (remover, nao e relevante para o empreendedor) |
| Esteira de agentes | Plataforma / Sistema inteligente |
| Engenharia responsavel | Desenvolvido pela Arnaut |
| Contratacao de equipe | Assinatura / Licenca |
| Cliente (referindo ao empreendedor) | Operador / Empreendedor / Dono da agencia |
| Cliente (referindo a PME final) | Cliente da sua agencia / Seu cliente |

### 6.3 Duas Personas da Landing Page

A LP precisa falar com duas personas simultaneamente:

| Persona Primaria | Persona Secundaria |
|---|---|
| **Empreendedor** que quer ter negocio de tecnologia | **Avaliador de programa** de startup |
| Quer saber: "funciona pra mim? quanto custa? quanto vou ganhar?" | Quer saber: "e produto? escala? tem TAM? tem tracao?" |
| Linguagem: beneficios, faturamento, simplicidade | Linguagem: metricas, mercado, tecnologia, defensibilidade |
| Secoes 1-4 e 7-9 falam mais com ele | Secoes 5-6 falam mais com ele |

---

## 7. METADATA E SEO

### 7.1 Title Tag
```
Arnaut - Tenha Sua Propria Agencia de Software | Plataforma AI-Native
```

### 7.2 Meta Description
```
The Agency by Arnaut: plataforma de IA que permite a qualquer 
empreendedor operar sua propria agencia de desenvolvimento de 
software sem saber programar. Configure, fature e escale.
```

---

## 8. RESUMO EXECUTIVO PARA APLICACAO NOS PROGRAMAS

### One-Liner
```
Arnaut builds The Agency, an AI-native platform that lets anyone 
run their own software development agency without coding skills -- 
autonomous agents handle prospecting, prototyping, development, 
testing, security, and deployment while the operator controls 
the business through a command cockpit.
```

### Descricao Curta (500 chars)
```
Arnaut LTDA develops The Agency: a standalone AI platform that 
enables entrepreneurs to operate their own software agencies 
without technical knowledge. AI agents autonomously prospect 
local SMB clients via Google Maps OSINT, build bespoke prototypes 
with real branding, generate production TypeScript/Next.js code 
with 80%+ test coverage and 5-layer security audits, and deploy 
to custom domains. Operators control everything via a visual 
cockpit. Near-zero marginal costs. >90% gross margin per project.
```

### Como Usamos IA
```
AI agents ARE the product. The Agency is a fully autonomous 
software factory platform where cognitive agents execute the 
entire business lifecycle: lead mining (OSINT/Google Maps), 
bespoke UI prototyping, Clean Architecture code generation, 
automated Playwright testing (80%+ coverage gate), 5-engine 
security auditing (Semgrep, Gitleaks, Trivy, SonarQube, Nuclei), 
cloud deployment, and financial settlement via PIX. An AI 
C-Suite board (CEO, CTO, CRO, COO agents) governs strategic 
decisions with human-in-the-loop oversight from the operator.
```

---

## 9. INSTRUCOES PARA A IA QUE VAI REESCREVER A LANDING PAGE

> [!CAUTION]
> Instrucoes obrigatorias para a IA executora.

1. **Ler este documento inteiro** antes de qualquer alteracao
2. **Entender o modelo de negocio**: a Arnaut LTDA vende um PRODUTO (The Agency) para EMPREENDEDORES que querem operar suas proprias agencias de software. A Arnaut NAO e ela mesma uma agencia/consultoria/software house
3. **Manter a estrutura React existente**: componentes separados, Next.js 15, Tailwind CSS v4
4. **Seguir o mapeamento da Secao 5** para saber o que mudar em cada arquivo
5. **Usar o glossario da Secao 6.2** para toda a copy
6. **Nao mudar o design system**: cores, tipografia, espacamentos, classes CSS permanecem -- mudar apenas conteudo textual e dados mockados
7. **Criar Metrics.tsx** seguindo padrao dos componentes existentes (nao criar Pricing.tsx; a waitlist fica no ContactSection reformulado)
8. **Testar build**: `npm run build` deve compilar sem erros apos todas as alteracoes
9. **Preservar a estetica dark/terminal** -- e um diferencial visual forte. Mudar CONTEUDO, nao ESTILO
10. **Todo conteudo em portugues brasileiro**, exceto termos tecnicos universais
11. **Nao ha pricing publico.** O produto esta em fase de MVP com lista de espera. Todo CTA deve direcionar para waitlist ("Entrar na lista de espera"), nunca para compra ou contratacao
12. **O nome "The Agency" permanece** -- e o nome do produto e faz sentido (o empreendedor ganha "sua propria agencia")
13. **A Arnaut LTDA e a marca guarda-chuva**, nao o produto. Manter "Arnaut LTDA" no navbar e footer como nome da empresa, e "The Agency" como nome do produto
