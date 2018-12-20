package at.fhj.swengs.delorian.service;

import at.fhj.swengs.delorian.model.Role;
import at.fhj.swengs.delorian.repository.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service()
public class UserRoleService {

    @Autowired
    private UserRoleRepository userRoleRepository;

    public Set<Role> getRolesByNames(Set<String> dtos) {
        Set<Role> entities = new HashSet<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(userRoleRepository.findById(dto).get()));
        }
        return entities;
    }
}
