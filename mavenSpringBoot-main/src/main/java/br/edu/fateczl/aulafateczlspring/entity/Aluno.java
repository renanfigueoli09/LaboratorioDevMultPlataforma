package br.edu.fateczl.aulafateczlspring.entity;

import br.edu.fateczl.aulafateczlspring.enumeration.Sexo;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="aluno")
public class Aluno {
	@Id
	@GeneratedValue
	private long id;
	
	private String nome;
	
	@Enumerated(EnumType.STRING)
	private Sexo sexo;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Sexo getSexo() {
		return sexo;
	}

	public void setSexo(Sexo sexo) {
		this.sexo = sexo;
	}
	
	
}
