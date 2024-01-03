package com.in28minutes.rest.webservices.restfulwebservices.filtering;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;

@RestController
public class FilteringController {

	@GetMapping("/filtering")
	public MappingJacksonValue filtering() {
		// dynamic filtering
		List<SomeBean> list = Arrays.asList(
				new SomeBean("value1","value2","value3")
				);
		
		MappingJacksonValue mappingJacksonValue = SetJacksonValue(list, "field1", "field3");

		return mappingJacksonValue;
	}
	
	@GetMapping("/filtering-list")
	public MappingJacksonValue filteringList() {
		// dynamic filtering				
		List<SomeBean> list = Arrays.asList(
				new SomeBean("value1","value2","value3"),
				new SomeBean("value4","value5","value6"),
				new SomeBean("value7","value8","value9")
				);
		
		MappingJacksonValue mappingJacksonValue = SetJacksonValue(list, "field2", "field3");
		
		
		return mappingJacksonValue;
	}
	
	// extract some duplicated process
	private MappingJacksonValue SetJacksonValue(List<SomeBean> list, String fieldName1, String fieldName2) {
		MappingJacksonValue mappingJacksonValue = new MappingJacksonValue(list);
		SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept(fieldName1, fieldName2);
		FilterProvider filters = new SimpleFilterProvider().addFilter("SomeBeanFilter", filter);
		mappingJacksonValue.setFilters(filters);
		return mappingJacksonValue;
	}

	
}
