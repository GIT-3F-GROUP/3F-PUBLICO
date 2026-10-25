Feedback da ORVIX: `Alert`, `Toast`/`ToastStack`, `Tooltip`, `Dialog`, `Skeleton`, `Spinner`, `EmptyState`, `InlineStatus`.

```jsx
<Alert tone="warning" title="Dado técnico pendente de conferência">
  Confirme a dose no rótulo vigente antes de publicar.
</Alert>
<Toast icon="check-circle-2" progress={64}>Lead registrado. O consultor entra em contato.</Toast>
<Dialog inline title="Solicitar recomendação técnica" sub="Resposta em até 1 dia útil"
  footer={<><Button variant="ghost">Cancelar</Button><Button variant="primary">Enviar</Button></>}>
  Informe município, cultura e volume de calda.
</Dialog>
<EmptyState icon="search-x" title="Nenhum produto nesta linha">Ajuste o filtro de cultura.</EmptyState>
<InlineStatus>Dados sincronizados com a base técnica</InlineStatus>
```

Notas
- Verde nunca é alerta. Aviso é âmbar, erro é vermelho, informação é azul.
- Toast é de vidro e entra com fade-up curto, sempre no canto inferior direito.
- Mensagem de erro afirma o próximo passo, não acusa o usuário.
