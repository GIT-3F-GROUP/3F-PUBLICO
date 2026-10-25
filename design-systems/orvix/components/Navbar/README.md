Navegação da ORVIX: `Navbar` (vidro fixo no topo), `SidebarNav` (painel interno), `Tabs`, `Breadcrumbs`, `Pagination`, `StepFlow`, `SiteFooter`.

```jsx
<Navbar
  logo={<Logo variant="principal-sem-assinatura" size="md" />}
  current="Linhas"
  links={[{label:"Tecnologia de Aplicação"},{label:"Linhas"},{label:"Blog"},{label:"Sobre"},{label:"Contato"}]}
  actions={<Button variant="primary" size="sm">Falar com consultor</Button>}
/>
<Breadcrumbs items={[{label:"Linhas",href:"/linhas"},{label:"Adjuvantes",href:"/adjuvantes"},{label:"ORV7 Drop Power"}]} />
<Tabs variant="pill" tabs={["Calda","Gota","Alvo"]} value="Gota" onChange={setEixo} />
<StepFlow active={1} steps={[{title:"Acesse a Orbia"},{title:"Cadastre a nota"},{title:"Aguarde a validação"},{title:"Resgate os pontos"}]} />
```

Notas
- O link ativo do `Navbar` ganha barra verde de 2px na base, nunca fundo verde.
- `SidebarNav` marca o item ativo com borda esquerda verde e fundo verde a 6%.
- Logo do header: principal sem assinatura, a 32px (o mínimo do X pontilhado). Nunca a principal com AGROQUÍMICA no header: abaixo de 80px a escrita some.
- `SiteFooter` já traz as assinaturas obrigatórias do grupo (DESIGNED BY XERXIZ.COM, Política, Termos).
