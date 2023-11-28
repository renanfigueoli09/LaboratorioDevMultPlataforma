package br.edu.fateczl.aulafateczlspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.fateczl.aulafateczlspring.entity.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long>{

}
