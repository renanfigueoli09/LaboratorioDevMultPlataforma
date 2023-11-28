package br.edu.fateczl.aulafateczlspring.services;

import org.springframework.stereotype.Service;

import br.edu.fateczl.aulafateczlspring.entity.Aluno;
import br.edu.fateczl.aulafateczlspring.repository.AlunoRepository;

@Service
public record AlunoService(AlunoRepository alunoRepository) {
	public Aluno salvar(Aluno aluno) {
		return alunoRepository.save(aluno);
	}
}
