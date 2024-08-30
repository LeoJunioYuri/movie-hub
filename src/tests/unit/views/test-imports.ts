//teste de importação dos componentes para verificar erros
import HomeView from '@/views/HomeView.vue';
import MovieCard from '@/components/MovieCard.vue';
import SubmitButton from '@/components/SubmitButton.vue';

describe('Import Test', () => {
  it('Deverá importar os módulos corretamente', () => {
    expect(HomeView).toBeDefined();
    expect(MovieCard).toBeDefined();
    expect(SubmitButton).toBeDefined();
  });
});
